import { makeAutoObservable } from "mobx";
import Employee from "../models/Employee";
import { EMPLOYEE_DUMMY } from "../utils/contants";

class UserProfileStore {
    currentUser: Employee;

    constructor() {
        console.log("HAA HELLO ");
        this.currentUser = EMPLOYEE_DUMMY;
        makeAutoObservable(this);
    }

    getCurrentUser(): Employee {
        return this.currentUser;
    }

    setCurrentUser(newUser: Employee) {
        this.currentUser = newUser;
    }
}

export default UserProfileStore;
