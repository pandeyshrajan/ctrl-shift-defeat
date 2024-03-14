import { action, makeAutoObservable, observable } from "mobx";
import Employee from "../models/Employee";
import { DEFUALT_INITIALISE_EMPLOYEE, DEMO_EMPLOYEES } from "../utils/contants";
import { api } from "../models/api";

class SearchBarStore {
    limitedEmployee: Employee[] = [];
    filteredEmployee: Employee[] = [];
    searchInput: string = "";
    searchCriteria: string = "Name";
    isSearchBarLaoding: boolean = false;

    constructor() {
        makeAutoObservable(this, {
            filteredEmployee: observable,
            searchInput: observable,
            isSearchBarLaoding: observable,
            setFilteredEmployee: action,
            searchCriteria: observable,
            setSearchCriteria: action,
            startSearchBarLoading: action,
            flushData: action,
        });
    }

    startSearchBarLoading() {
        this.isSearchBarLaoding = true;
    }

    stopSearchBarLoading() {
        this.isSearchBarLaoding = false;
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
        searchBarStore.startSearchBarLoading();
        if (this.searchInput === "") {
            this.setFilteredEmployee(this.limitedEmployee);
            return;
        }

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
        setTimeout(() => searchBarStore.stopSearchBarLoading(), 700);
    }

    flushData() {
        this.limitedEmployee = [];
        this.filteredEmployee = [];
        this.searchInput = "";
        this.searchCriteria = "";
        this.isSearchBarLaoding = false;
    }
}

export const searchBarStore = new SearchBarStore();
