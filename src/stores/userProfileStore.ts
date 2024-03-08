import { observable, action, makeObservable } from "mobx";
import Employee from "../models/Employee";
import { DEFUALT_INITIALISE_EMPLOYEE, EMPLOYEE_DUMMY } from "../utils/contants";

class UserProfileStore {
    currentUser: Employee = EMPLOYEE_DUMMY;
    treeData: Employee = EMPLOYEE_DUMMY;
    tabValue: String = "one";
    uploadPopUp: Boolean = false;

    constructor() {
        makeObservable(this, {
            currentUser: observable,
            treeData: observable,
            tabValue: observable,
            uploadPopUp: observable,
            setCurrentUser: action,
            setTreeData: action,
            showPopUp: action,
            closePopUp: action,
        });
    }

    getCurrentUser(): Employee {
        return this.currentUser;
    }

    getTabValue(): String {
        return this.tabValue;
    }

    getTreeData(): Employee {
        console.log(this.treeData);
        return this.treeData;
    }

    showPopUp() {
        this.uploadPopUp = true;
    }

    closePopUp() {
        this.uploadPopUp = !this.uploadPopUp;
    }

    setCurrentUser(newUser: Employee) {
        this.currentUser = newUser;
    }

    setTreeData(newData: Employee) {
        this.treeData = newData;
    }

    setTabValue(newValue: String) {
        this.tabValue = newValue;
    }
}

export const store = new UserProfileStore();
