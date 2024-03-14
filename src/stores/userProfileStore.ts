import { observable, action, makeObservable } from "mobx";
import Employee from "../models/Employee";
import { DEFUALT_INITIALISE_EMPLOYEE, DEFUALT_INITIALISE_USER_PROFILE, EMPLOYEE_DUMMY } from "../utils/contants";
import { api } from "../models/api";
import UserProfile from "../models/UserProfile";

class UserProfileStore {
    loggedInUser: UserProfile = DEFUALT_INITIALISE_USER_PROFILE;
    currentProfile: UserProfile = DEFUALT_INITIALISE_USER_PROFILE;
    directReporties: Employee[] = [];
    treeData: Employee = DEFUALT_INITIALISE_EMPLOYEE;
    tabValue: string = "one";
    profileImage: string = "";
    isAdmin: boolean = false;

    constructor() {
        makeObservable(this, {
            currentProfile: observable,
            treeData: observable,
            tabValue: observable,
            profileImage: observable,
            isAdmin: observable,
            directReporties: observable,
            setCurrentProfile: action,
            setTreeData: action,
            toggleProfileImage: action,
        });
    }

    isLoggedInUser(): boolean {
        return this.loggedInUser.employee.employeeId === this.currentProfile.employee.employeeId;
    }

    setLoggedInUser(user: UserProfile) {
        this.loggedInUser = user;
        console.log("LOGGED IN USER ");

        this.setCurrentProfile(this.loggedInUser);
    }

    setAdmin(value: boolean) {
        this.isAdmin = value;
    }

    getCurrentProfile(): UserProfile {
        return this.currentProfile;
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
        if (this.currentProfile.employee.badgeImageUrl) {
            this.profileImage = this.profileImage === this.currentProfile.employee.badgeImageUrl ? this.currentProfile.employee.profileImageUrl : this.currentProfile.employee.badgeImageUrl;
        }
    }

    async setCurrentProfile(currentProfile: UserProfile) {
        this.currentProfile = currentProfile;
        this.treeData = DEFUALT_INITIALISE_EMPLOYEE;
        this.profileImage = currentProfile.employee.profileImageUrl;
        console.log("SETTING CURRENT PROFILE");

        await this.setTreeData();
    }

    setDirectReportees(reportess: Employee[]) {
        this.directReporties = reportess;
    }

    //Tree Data to be shown in hirarchy
    async setTreeData(newData?: Employee) {
        if (this.treeData.employeeId === 0) {
            await this.createInitialTree();
        } else {
            console.log(" AYO WTFFF ");

            this.treeData = { ...newData! }; //! marks that we know what we we are doing ignoring the error message
        }
    }

    async createInitialTree() {
        console.log("CREATING NEW INITIAL  TREE DATA");

        const employeeId = this.currentProfile.employee.employeeId;
        const manager: Employee = await api.getManager(employeeId);
        const siblings: Employee[] = await api.getReportees(manager.employeeId);
        const reportees: Employee[] = await api.getReportees(employeeId);

        this.setDirectReportees(reportees);

        for (let i = 0; i < siblings.length; ++i) {
            if (siblings[i].employeeId === employeeId) {
                siblings[i].children = reportees;
                break;
            }
        }

        manager.children = siblings;
        this.treeData = { ...manager };
    }

    setTabValue(newValue: string) {
        this.tabValue = newValue;
    }

    async fetchReportees(curId: number) {
        const e: Employee[] = await api.getReportees(curId);
        this.insertReportees(this.treeData, e, curId);
        console.log(this.treeData);
        this.setTreeData(this.treeData);
    }

    insertReportees(empl: Employee, e: Employee[], curId: number): boolean {
        if (empl.employeeId === curId) {
            empl.children = e;
            return true;
        }

        empl.children?.forEach((i) => {
            if (this.insertReportees(i, e, curId)) {
                return true;
            }
        });

        return false;
    }

    async newManager(curId: number) {
        const manager: Employee = await api.getManager(curId);
        manager.children = await api.getReportees(manager.employeeId);
        this.setTreeData(this.addManager(this.treeData, manager, curId));
        console.log(this.treeData);
    }

    addManager(empl: Employee, manager: Employee, curId: number): any {
        if (empl.employeeId === curId) {
            // manager.children(empl);
            return manager;
        }
        const c: Employee[] = empl.children?.map((cur) => {
            return this.addManager(cur, manager, curId);
        })!;
        empl.children = c;
        return empl;
    }

    async fetchClickedProfile(emplId: number) {
        const newProfile: UserProfile = await api.getUserProfile(emplId);
        this.setCurrentProfile(newProfile);
    }

    flushData() {
        this.loggedInUser = DEFUALT_INITIALISE_USER_PROFILE;
        this.currentProfile = DEFUALT_INITIALISE_USER_PROFILE;
        this.directReporties = [];
        this.treeData = DEFUALT_INITIALISE_EMPLOYEE;
        this.profileImage = "";
        this.isAdmin = false;
        this.tabValue = "one";
    }
}

// export default UserProfileStore;
export const store = new UserProfileStore();
