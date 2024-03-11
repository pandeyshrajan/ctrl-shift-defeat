import { DEFUALT_INITIALISE_EMPLOYEE } from "../utils/contants";

// {
//     "employeeId": 2,
//     "name": "Jane Smith",
//     "email": "jane@example.com",
//     "managerId": "1",
//     "level": "Junior",
//     "designation": "Software Engineer",
//     "contact": 987654321,
//     "profileImageUrl": "profile_image_url_2",
//     "badgeImageUrl": "badge_image_url_2",
//     "slackUrl": "slack_url_2",
//     "department": "IT",
//     "dob": "1995-10-24T18:30:00.000+00:00",
//     "date_of_joining": "2015-03-11T18:30:00.000+00:00",
//     "address": "456 Oak St, City, Country"
//   }

class Employee {
    employeeId: number;
    name: string;
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
    children?: Employee[];
    // documentURL: string;
    // interest: string[];
    // projectTags: string[];
    // isAdmin: Boolean;

    constructor() {
        this.name = DEFUALT_INITIALISE_EMPLOYEE.name;
        this.employeeId = DEFUALT_INITIALISE_EMPLOYEE.employeeId;
        this.designation = DEFUALT_INITIALISE_EMPLOYEE.designation;
        this.level = DEFUALT_INITIALISE_EMPLOYEE.level;
        this.slackURL = DEFUALT_INITIALISE_EMPLOYEE.slackURL;
        this.managerId = DEFUALT_INITIALISE_EMPLOYEE.managerId;
        this.children = DEFUALT_INITIALISE_EMPLOYEE.children;
        // this.documentURL = DEFUALT_INITIALISE_EMPLOYEE.documentURL;
        this.email = DEFUALT_INITIALISE_EMPLOYEE.email;
        this.contact = DEFUALT_INITIALISE_EMPLOYEE.contact;
        // this.interest = DEFUALT_INITIALISE_EMPLOYEE.interest;
        // this.interest = DEFUALT_INITIALISE_EMPLOYEE.interest;
        // this.projectTags = DEFUALT_INITIALISE_EMPLOYEE.projectTags;
        this.profileImageUrl = DEFUALT_INITIALISE_EMPLOYEE.profileImageUrl;
        this.badgeImageUrl = DEFUALT_INITIALISE_EMPLOYEE.badgeImageUrl;
        // this.isAdmin = DEFUALT_INITIALISE_EMPLOYEE.isAdmin;
        this.dob = DEFUALT_INITIALISE_EMPLOYEE.dob;
        this.date_of_joining = DEFUALT_INITIALISE_EMPLOYEE.date_of_joining;
        this.department = DEFUALT_INITIALISE_EMPLOYEE.department;
        this.address = DEFUALT_INITIALISE_EMPLOYEE.address;
    }
}

export default Employee;
