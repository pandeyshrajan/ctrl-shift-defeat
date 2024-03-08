import { observable, action, makeObservable } from "mobx";
import Employee from "../models/Employee";
import { EMPLOYEE_DUMMY } from "../utils/contants";

class UserProfileStore {
    currentUser: Employee = EMPLOYEE_DUMMY;
    treeData: Employee = EMPLOYEE_DUMMY;
    tabValue: string = "one";
    uploadPopUp: Boolean = false;
    profileImage: string = this.currentUser.profileImageUrl;

    constructor() {
        makeObservable(this, {
            currentUser: observable,
            treeData: observable,
            tabValue: observable,
            uploadPopUp: observable,
            profileImage: observable,
            setCurrentUser: action,
            setTreeData: action,
            showPopUp: action,
            closePopUp: action,
            toggleProfileImage: action,
            getProfileImage: action,
        });
    }

    getCurrentUser(): Employee {
        return this.currentUser;
    }

    getTabValue(): string {
        return this.tabValue;
    }

    getTreeData(): Employee {
        console.log(this.treeData);
        return this.treeData;
    }

    getProfileImage(): string {
        return this.profileImage;
    }

    toggleProfileImage() {
        if (this.currentUser.badgeImageUrl) {
            this.profileImage = this.profileImage === this.currentUser.badgeImageUrl ? this.currentUser.profileImageUrl : this.currentUser.badgeImageUrl;
        }
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
        this.currentUser = newData;
        this.profileImage = this.currentUser.profileImageUrl;
    }

    setTabValue(newValue: string) {
        this.tabValue = newValue;
    }
}

export default UserProfileStore;
export const store = new UserProfileStore();
