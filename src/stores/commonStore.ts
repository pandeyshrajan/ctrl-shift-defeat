import { api } from "../models/api";
import { searchBarStore } from "./searchBarStore";
import { store } from "./userProfileStore";

class CommonStore {
    userInputOnLogin: string = "";
    password: string = "";
    isAdmin: boolean = false;
    loginUserId: number = -1;

    async authenticateUser() {
        console.log("API");
        const loginResponse = await api.logInAuthentication("", 2, "password2");

        console.log(loginResponse);

        if (loginResponse && loginResponse.loginStatus === "SUCCESS") {
            console.log("WTF");

            store.setLoggedInUser(loginResponse.userProfile);
            store.setAdmin(loginResponse.admin);
        } else {
            alert("WRONG PASSWORD");
        }

        await this.otherLoadings();
    }

    async otherLoadings() {
        await searchBarStore.fetchEmployeeList();
    }

    showLoader() {}
}

export const commonStore = new CommonStore();
