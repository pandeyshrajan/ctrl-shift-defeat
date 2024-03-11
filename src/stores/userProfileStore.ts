import { observable, action, makeObservable } from "mobx";
import Employee from "../models/Employee";
import { DEFUALT_INITIALISE_USER_PROFILE, EMPLOYEE_DUMMY } from "../utils/contants";
import { api } from "../models/api";
import UserProfile from "../models/UserProfile";
import InterestTags from "../models/InterestTags";
import ProjectTags from "../models/ProjectTags";

class UserProfileStore {
    currentUser: Employee = EMPLOYEE_DUMMY;
    treeData: Employee = EMPLOYEE_DUMMY;
    tabValue: string = "one";
    uploadPopUp: boolean = false;
    profileImage: string = "../../assets/MoneyView.jpeg";
    isAdmin: boolean = Math.random() * 10 > 5;
    isCurrentUser: boolean = Math.random() * 10 > 5;
    currentProfileInfo: UserProfile = DEFUALT_INITIALISE_USER_PROFILE;
    interestTags: InterestTags[] = [];
    projectTags: ProjectTags[] = [];

    constructor() {
        makeObservable(this, {
            currentUser: observable,
            treeData: observable,
            tabValue: observable,
            uploadPopUp: observable,
            profileImage: observable,
            setCurrentUser: action,
            setTreeData: action,
            openPopUp: action,
            closePopUp: action,
            toggleProfileImage: action,
        });
    }

    getPopUpStatus(): boolean {
        return this.uploadPopUp;
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

    openPopUp() {
        this.uploadPopUp = true;
        console.log(" PP " + this.uploadPopUp);
    }

    closePopUp() {
        console.log("CLOSE");

        this.uploadPopUp = false;
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

    async newNode(curId: number) {
        const e: Employee[] = await api.getReportees(curId);
        this.insertNewNode(this.treeData, e, curId);
        console.log(this.treeData);
        this.setTreeData(this.treeData);
    }

    insertNewNode(empl: Employee, e: Employee[], curId: number): boolean {
        if (empl.employeeId === curId) {
            empl.children = e;
            return true;
        }

        empl.children?.forEach((i) => {
            if (this.insertNewNode(i, e, curId)) {
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

    async initialLoading() {
        console.log("AAGAY ");

        this.currentProfileInfo = await api.getUserProfile(1);
        console.log(this.currentProfileInfo);
        this.projectTags = this.currentProfileInfo.projectTags;
        this.interestTags = this.currentProfileInfo.interestTags;
        this.setCurrentUser(this.currentProfileInfo.employee);
    }
}

// export default UserProfileStore;
export const store = new UserProfileStore();
