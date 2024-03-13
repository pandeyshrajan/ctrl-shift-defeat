import { observable, action, makeObservable } from "mobx";
import Employee from "../models/Employee";
import { DEFUALT_INITIALISE_EMPLOYEE, DEFUALT_INITIALISE_USER_PROFILE, EMPLOYEE_DUMMY } from "../utils/contants";
import { api } from "../models/api";
import UserProfile from "../models/UserProfile";
import InterestTags from "../models/InterestTags";
import ProjectTags from "../models/ProjectTags";
import { commonStore } from "./commonStore";

class UserProfileStore {
    loggedInUser: UserProfile = DEFUALT_INITIALISE_USER_PROFILE; //logged in user
    currentProfile: UserProfile = DEFUALT_INITIALISE_USER_PROFILE; //current open profile
    directReporties: Employee[] = [];
    treeData: Employee = EMPLOYEE_DUMMY; //data to be loaded in tree
    tabValue: string = "one"; //current active tab in details component
    uploadPopUp: boolean = false; //show upload popup or not
    profileImage: string = "../../assets/MoneyView.jpeg"; //current profile image
    isAdmin: boolean = Math.random() * 10 > 5; //wheather logged in user is admin or not ( Show admin privilages in UI )
    // currentProfileInfo: UserProfile = DEFUALT_INITIALISE_USER_PROFILE; //complete profile info of current user
    interestTags: InterestTags[] = [];
    projectTags: ProjectTags[] = [];

    constructor() {
        makeObservable(this, {
            currentProfile: observable,
            treeData: observable,
            tabValue: observable,
            uploadPopUp: observable,
            profileImage: observable,
            isAdmin: observable,
            directReporties: observable,
            setCurrentProfile: action,
            setTreeData: action,
            openPopUp: action,
            closePopUp: action,
            toggleProfileImage: action,
        });
    }

    setLoggedInUser(user: UserProfile) {
        this.loggedInUser = user;
        console.log("LOGGED IN USER ");

        this.setCurrentProfile(this.loggedInUser);
    }

    setAdmin(value: boolean) {
        this.isAdmin = value;
    }

    getPopUpStatus(): boolean {
        return this.uploadPopUp;
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

    openPopUp() {
        this.uploadPopUp = true;
        console.log(" PP " + this.uploadPopUp);
    }

    closePopUp() {
        console.log("CLOSE");

        this.uploadPopUp = false;
    }

    async setCurrentProfile(currentProfile: UserProfile) {
        this.currentProfile = currentProfile;
        this.treeData = DEFUALT_INITIALISE_EMPLOYEE;
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
}

// export default UserProfileStore;
export const store = new UserProfileStore();
