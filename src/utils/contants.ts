import Employee from "../models/Employee";
import ProjectTags from "../models/ProjectTags";
import InterestTags from "../models/InterestTags";
import UserProfile from "../models/UserProfile";
// employeeId: number;
//     name: string;
//     email: string;
//     managerId: string;
//     level: string;
//     designation: string;
//     contact: string;
//     profileImageUrl: string;
//     badgeImageUrl?: string;
//     slackURL: string;
//     department: string;
//     dob: Date;
//     date_of_joining: Date;
//     address: string;

// isAdmin: false,
// children: [],
// documentURL: "",
// interest: [],
// projectTags: [],
export const DEFUALT_INITIALISE_EMPLOYEE: Employee = {
    name: "",
    employeeId: 0,
    designation: "",
    level: "0",
    slackURL: "",
    managerId: "0",
    email: "",
    contact: "",
    dob: new Date("0000-00-00"),
    address: "",
    department: "",
    date_of_joining: new Date("0000-00-00"),
    profileImageUrl: "",
    badgeImageUrl: "",
    children: [],
};

export const DEFUALT_INITIALISE_USER_PROFILE: UserProfile = {
    employee: DEFUALT_INITIALISE_EMPLOYEE,
    interestTags: [],
    projectTags: [],
};

export const EMPLOYEE_DUMMY: Employee = {
    name: "Shrajan Pandey",
    employeeId: 2,
    designation: "SDE Intern",
    level: "0",
    slackURL: "",
    managerId: "0",
    email: "",
    contact: "",
    dob: new Date("0000-00-00"),
    address: "",
    department: "",
    date_of_joining: new Date("0000-00-00"),
    profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
    badgeImageUrl: "/src/assets/MoneyView.jpeg",
    children: [],
};

export const PROJECT_TAGS_INITIALISE: ProjectTags = {
    projectId: "",
    projectManager: "",
    projectUrl: "",
    name: "",
};

export const INTEREST_TAGS_INITIALISE: InterestTags = {
    interestId: "",
    interestUrl: "",
    interestName: "",
};

export enum PERSONAL_INFO {
    Name,
    "Employee ID",
    Department,
    Designation,
    Pod,
    Level,
    Manager,
    DOB,
    DOJ,
    Address,
}

export enum DOCUMENTS {
    "Offer Letter",
    "Aadhar Card",
    "Pan Card",
    "Bank Detail",
}

export const DEMO_EMPLOYEES: Employee[] = [
    {
        name: "Shrajan Pandey",
        employeeId: 0,
        designation: "SDE Intern",
        level: "0",
        slackURL: "",
        managerId: "0",
        email: "",
        contact: "",
        dob: new Date("0000-00-00"),
        address: "",
        department: "",
        date_of_joining: new Date("0000-00-00"),
        profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
        badgeImageUrl: "/src/assets/MoneyView.jpeg",
    },
    {
        name: "Shrajan Pandey",
        employeeId: 0,
        designation: "SDE Intern",
        level: "0",
        slackURL: "",
        managerId: "0",
        email: "",
        contact: "",
        dob: new Date("0000-00-00"),
        address: "",
        department: "",
        date_of_joining: new Date("0000-00-00"),
        profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
        badgeImageUrl: "/src/assets/MoneyView.jpeg",
    },
    {
        name: "Shrajan Pandey",
        employeeId: 0,
        designation: "SDE Intern",
        level: "0",
        slackURL: "",
        managerId: "0",
        email: "",
        contact: "",
        dob: new Date("0000-00-00"),
        address: "",
        department: "",
        date_of_joining: new Date("0000-00-00"),
        profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
        badgeImageUrl: "/src/assets/MoneyView.jpeg",
    },
    {
        name: "Shrajan Pandey",
        employeeId: 0,
        designation: "SDE Intern",
        level: "0",
        slackURL: "",
        managerId: "0",
        email: "",
        contact: "",
        dob: new Date("0000-00-00"),
        address: "",
        department: "",
        date_of_joining: new Date("0000-00-00"),
        profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
        badgeImageUrl: "/src/assets/MoneyView.jpeg",
    },
    {
        name: "Shrajan Pandey",
        employeeId: 0,
        designation: "SDE Intern",
        level: "0",
        slackURL: "",
        managerId: "0",
        email: "",
        contact: "",
        dob: new Date("0000-00-00"),
        address: "",
        department: "",
        date_of_joining: new Date("0000-00-00"),
        profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
        badgeImageUrl: "/src/assets/MoneyView.jpeg",
    },
];
