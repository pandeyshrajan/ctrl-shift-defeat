import Employee from "../models/Employee";

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

export const EMPLOYEE_DUMMY: Employee = {
    name: "Shrajan Pandey",
    employeeId: 1,
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
    // name: "Shrajan Pandey",
    // employeeId: 0,
    // designation: "SDE Intern",
    // level: "0",
    // slackURL: "",
    // managerId: "0",
    // email: "",
    // contactNo: "",
    // children: [
    //     { name: "Lokesh", employeeId: "1", designation: "LAMBAA HAI REE MADUM LAMBA", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [{ name: "Ramesh", employeeId: "3", designation: "BRUH WTF", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/MoneyView.jpeg", isAdmin: false }], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false },
    //     { name: "Lokesh", employeeId: "2", designation: "ROM ROMM BHAIYOONNN", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [{ name: "Ramesh", employeeId: "4", designation: "ROM ROOM BHAIYOOOOO", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false }], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/MoneyView.jpeg", isAdmin: false },
    // ],
    // documentURL: "",
    // interest: [],
    // projectTags: [],
    // profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
    // isAdmin: true,
    // badgeImageUrl: "/src/assets/MoneyView.jpeg",
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
