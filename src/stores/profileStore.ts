import { observable, action, makeObservable } from "mobx";
import Employee from "../models/Employee";
import { EMPLOYEE_DUMMY } from "../utils/contants";
import { getNodeData } from "../models/api";

class UserProfileStore {
    currentUser: Employee = EMPLOYEE_DUMMY;
    treeData: Employee = EMPLOYEE_DUMMY;
    tabValue: string = "one";
    uploadPopUp: Boolean = false;
    profileImage: string = this.currentUser.profileImageUrl;
    isAdmin: boolean = Math.random() * 10 > 5;
    isCurrentUser: boolean = Math.random() * 10 > 5;

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
        this.treeData = { ...newData };
        this.currentUser = newData;
        this.profileImage = this.currentUser.profileImageUrl;
    }

    setTabValue(newValue: string) {
        this.tabValue = newValue;
    }

    newNode(curId: string) {
        const e: Employee = getNodeData();
        this.insertNewNode(this.treeData, e, curId);
        console.log(this.treeData);
        this.setTreeData(this.treeData);
    }

    insertNewNode(empl: Employee, e: Employee, curId: string): boolean {
        if (empl.employeeId === curId) {
            empl.children?.push(e);
            return true;
        }

        empl.children?.forEach((i) => {
            if (this.insertNewNode(i, e, curId)) {
                return true;
            }
        });

        return false;
    }

    newManager(curId: string) {
        const e: Employee = getNodeData();
        this.setTreeData(this.addManager(this.treeData, e, curId));
        console.log(this.treeData);
    }

    addManager(empl: Employee, e: Employee, curId: string): Employee {
        if (empl.employeeId === curId) {
            e.children?.push(empl);
            return e;
        }

        const c: Employee[] = empl.children?.map((i) => {
            return this.addManager(i, e, curId);
        })!;

        empl.children = c;

        return empl;
    }
}

export default UserProfileStore;
export const store = new UserProfileStore();
