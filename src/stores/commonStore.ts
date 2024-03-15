import toast from "react-hot-toast";
import { api } from "../models/api";
import { searchBarStore } from "./searchBarStore";
import { store } from "./userProfileStore";
import { makeAutoObservable, observable, action } from "mobx";

class CommonStore {
    userInputOnLogin: string = "";
    password: string = "";
    isAdmin: boolean = false;
    loginUserId: number = -1;
    isFullScreen: boolean = false;
    isLoading: boolean = false;
    treeCurrentRootId: number = -1;
    openSearchBar: boolean = false;

    constructor() {
        makeAutoObservable(this, {
            isFullScreen: observable,
            isLoading: observable,
            treeCurrentRootId: observable,
            openSearchBar: observable,
            startLoader: action,
            stopLoader: action,
        });
    }

    toggleSearchBar() {
        this.openSearchBar = !this.openSearchBar;
    }

    async authenticateUser() {
        if (this.userInputOnLogin === "" || this.password === "") {
            toast.error("Invalid entry");
            return;
        }

        let loginResponse;

        if (isNaN(parseFloat(this.userInputOnLogin))) {
            loginResponse = await api.logInAuthentication(this.userInputOnLogin, 0, this.password);
        } else {
            loginResponse = await api.logInAuthentication("", parseInt(this.userInputOnLogin), this.password);
        }

        console.log(loginResponse);

        if (loginResponse && loginResponse.loginStatus === "SUCCESS") {
            commonStore.loginUserId = loginResponse.userProfile.employee.employeeId;
            store.setLoggedInUser(loginResponse.userProfile);
            store.setAdmin(loginResponse.admin);
            toast.success("Logged In Succefully");
        } else {
            toast.error(loginResponse.loginStatus);
            return;
        }

        await this.otherLoadings();
    }

    startLoader() {
        this.isLoading = true;
    }

    stopLoader() {
        this.isLoading = false;
    }

    async otherLoadings() {
        await searchBarStore.fetchEmployeeList();
    }

    setInput(userInput: string) {
        this.userInputOnLogin = userInput;
    }

    setPassword(password: string) {
        this.password = password;
    }

    flushData() {
        this.userInputOnLogin = "";
        this.password = "";
        this.isAdmin = false;
        this.loginUserId = -1;
        this.isFullScreen = false;
    }
}

export const commonStore = new CommonStore();
