import { action, makeAutoObservable, observable } from "mobx";
import Employee from "../models/Employee";
import { DEMO_EMPLOYEES } from "../utils/contants";
import { api } from "../models/api";

class SearchBarStore {
    allEmployee: Employee[] = DEMO_EMPLOYEES;
    filteredEmployee: Employee[] = DEMO_EMPLOYEES;
    searchInput: string = "";
    searchCriteria: string = "name";

    constructor() {
        makeAutoObservable(this, {
            filteredEmployee: observable,
            searchInput: observable,
            applyFilter: action,
            setFilteredEmployee: action,
            searchCriteria: observable,
            setSearchCriteria: action,
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

    setSearchCriteria(currentCriteria: string) {
        this.searchCriteria = currentCriteria;
    }

    async searchByCriteria(input: string) {
        let filteredResponse: Employee[] = [];

        switch (this.searchCriteria) {
            case "name": {
                filteredResponse = await api.searchByName(input);
                break;
            }
            case "id": {
                filteredResponse = await api.searchByID(parseInt(input));
                break;
            }
            case "project": {
                filteredResponse = await api.searchByProject(input);
                break;
            }
            case "interest": {
                filteredResponse = await api.searchByInterest(input);
                break;
            }
        }

        this.setFilteredEmployee(filteredResponse);
    }
}

export const searchBarStore = new SearchBarStore();
