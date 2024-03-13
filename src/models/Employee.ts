import { DEFUALT_INITIALISE_EMPLOYEE } from "../utils/contants";

class Employee {
    name: string;
    employeeId: number;
    email: string;
    managerId: string;
    level: string;
    designation: string;
    contact: string;
    profileImageUrl: string;
    badgeImageUrl?: string;
    slackURL: string;
    department: string;
    dob: Date;
    date_of_joining: Date;
    address: string;
    pod: string;
    children?: Employee[];

    constructor() {
        this.name = DEFUALT_INITIALISE_EMPLOYEE.name;
        this.employeeId = DEFUALT_INITIALISE_EMPLOYEE.employeeId;
        this.designation = DEFUALT_INITIALISE_EMPLOYEE.designation;
        this.level = DEFUALT_INITIALISE_EMPLOYEE.level;
        this.slackURL = DEFUALT_INITIALISE_EMPLOYEE.slackURL;
        this.managerId = DEFUALT_INITIALISE_EMPLOYEE.managerId;
        this.children = DEFUALT_INITIALISE_EMPLOYEE.children;
        this.email = DEFUALT_INITIALISE_EMPLOYEE.email;
        this.contact = DEFUALT_INITIALISE_EMPLOYEE.contact;
        this.profileImageUrl = DEFUALT_INITIALISE_EMPLOYEE.profileImageUrl;
        this.badgeImageUrl = DEFUALT_INITIALISE_EMPLOYEE.badgeImageUrl;
        this.dob = DEFUALT_INITIALISE_EMPLOYEE.dob;
        this.date_of_joining = DEFUALT_INITIALISE_EMPLOYEE.date_of_joining;
        this.department = DEFUALT_INITIALISE_EMPLOYEE.department;
        this.address = DEFUALT_INITIALISE_EMPLOYEE.address;
        this.pod = DEFUALT_INITIALISE_EMPLOYEE.pod;
    }
}

export default Employee;
