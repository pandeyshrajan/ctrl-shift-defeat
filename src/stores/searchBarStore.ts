import { action, makeAutoObservable, observable } from "mobx";
import Employee from "../models/Employee";
import { DEMO_EMPLOYEES } from "../utils/contants";

class SearchBarStore {
    allEmployee: Employee[] = DEMO_EMPLOYEES;
    filteredEmployee: Employee[] = DEMO_EMPLOYEES;
    searchInput: string = "";

    constructor() {
        makeAutoObservable(this, {
            filteredEmployee: observable,
            searchInput: observable,
            applyFilter: action,
            setFilteredEmployee: action,
        });
    }

    getFilteredEmployee(): Employee[] {
        return this.filteredEmployee;
    }

    setFilteredEmployee(employees: Employee[]) {
        this.filteredEmployee = employees;
    }

    applyFilter(searchFilter: string) {
        const searchResult: Employee[] = this.allEmployee.filter((curEmployee) => {
            return curEmployee.name.toLowerCase().includes(searchFilter.toLowerCase());
        });

        this.setFilteredEmployee(searchResult);
    }
}

export const searchBarStore = new SearchBarStore();
