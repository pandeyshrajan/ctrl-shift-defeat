import { DEFUALT_INITIALISE_EMPLOYEE } from "../utils/contants";

class Employee {
    name: string;
    employeeId: string;
    designation: string;
    level: string;
    slackURL: string;
    managerId: string;
    children?: Employee[];
    documentURL: string;
    emailId: string;
    contactNo: string;
    interest: string[];
    projectTags: string[];
    profileImageUrl: string;
    badgeImageUrl?: string;
    isAdmin: Boolean;

    constructor() {
        this.name = DEFUALT_INITIALISE_EMPLOYEE.name;
        this.employeeId = DEFUALT_INITIALISE_EMPLOYEE.employeeId;
        this.designation = DEFUALT_INITIALISE_EMPLOYEE.designation;
        this.level = DEFUALT_INITIALISE_EMPLOYEE.level;
        this.slackURL = DEFUALT_INITIALISE_EMPLOYEE.slackURL;
        this.managerId = DEFUALT_INITIALISE_EMPLOYEE.managerId;
        this.children = DEFUALT_INITIALISE_EMPLOYEE.children;
        this.documentURL = DEFUALT_INITIALISE_EMPLOYEE.documentURL;
        this.emailId = DEFUALT_INITIALISE_EMPLOYEE.emailId;
        this.contactNo = DEFUALT_INITIALISE_EMPLOYEE.contactNo;
        this.interest = DEFUALT_INITIALISE_EMPLOYEE.interest;
        this.interest = DEFUALT_INITIALISE_EMPLOYEE.interest;
        this.projectTags = DEFUALT_INITIALISE_EMPLOYEE.projectTags;
        this.profileImageUrl = DEFUALT_INITIALISE_EMPLOYEE.profileImageUrl;
        this.badgeImageUrl = DEFUALT_INITIALISE_EMPLOYEE.badgeImageUrl;
        this.isAdmin = DEFUALT_INITIALISE_EMPLOYEE.isAdmin;
    }
}

export default Employee;
