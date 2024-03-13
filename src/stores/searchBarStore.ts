import { action, makeAutoObservable, observable } from "mobx";
import Employee from "../models/Employee";
import { DEMO_EMPLOYEES } from "../utils/contants";
import { api } from "../models/api";

class SearchBarStore {
    limitedEmployee: Employee[] = DEMO_EMPLOYEES;
    filteredEmployee: Employee[] = DEMO_EMPLOYEES;
    searchInput: string = "";
    searchCriteria: string = "Name";
    // searchInput: string = "";

    constructor() {
        makeAutoObservable(this, {
            filteredEmployee: observable,
            searchInput: observable,
            setFilteredEmployee: action,
            searchCriteria: observable,
            setSearchCriteria: action,
        });
    }

    async fetchEmployeeList() {
        const data: Employee[] = await api.getLimitedEmployee();
        this.limitedEmployee = data;
        this.setFilteredEmployee(this.limitedEmployee);
    }

    getFilteredEmployee(): Employee[] {
        return this.filteredEmployee;
    }

    setFilteredEmployee(employees: Employee[]) {
        this.filteredEmployee = employees;
    }

    setSearchCriteria(currentCriteria: string) {
        this.searchCriteria = currentCriteria;
    }

    setSearchInput(input: string) {
        this.searchInput = input;
    }

    async searchByCriteria() {
        let filteredResponse: Employee[] = [];

        switch (this.searchCriteria) {
            case "Name": {
                filteredResponse = await api.searchByName(this.searchInput);
                break;
            }
            case "ID": {
                filteredResponse = await api.searchByID(parseInt(this.searchInput));
                break;
            }
            case "Project": {
                filteredResponse = await api.searchByProject(this.searchInput);
                break;
            }
            case "Interest": {
                filteredResponse = await api.searchByInterest(this.searchInput);
                break;
            }
            case "Department": {
                break;
            }
            case "Pod": {
                break;
            }
        }

        this.setFilteredEmployee(filteredResponse);
    }
}

export const searchBarStore = new SearchBarStore();
