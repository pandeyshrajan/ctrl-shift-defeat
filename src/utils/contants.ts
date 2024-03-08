import Employee from "../models/Employee";

export const DEFUALT_INITIALISE_EMPLOYEE: Employee = {
    name: "",
    employeeId: "0",
    designation: "",
    level: "0",
    slackURL: "",
    managerId: "0",
    emailId: "",
    contactNo: "",
    children: [],
    documentURL: "",
    interest: [],
    projectTags: [],
    profileImageUrl: "",
    badgeImageUrl: "",
    isAdmin: false,
};

export const EMPLOYEE_DUMMY: Employee = {
    name: "Shrajan Pandey",
    employeeId: "0",
    designation: "SDE Intern",
    level: "0",
    slackURL: "",
    managerId: "0",
    emailId: "",
    contactNo: "",
    children: [
        { name: "Lokesh", employeeId: "0", designation: "LAMBAA HAI REE MADUM LAMBA", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [{ name: "Ramesh", employeeId: "0", designation: "BRUH WTF", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/MoneyView.jpeg", isAdmin: false }], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false },
        { name: "Lokesh", employeeId: "0", designation: "ROM ROMM BHAIYOONNN", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [{ name: "Ramesh", employeeId: "0", designation: "ROM ROOM BHAIYOOOOO", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false }], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/MoneyView.jpeg", isAdmin: false },
    ],
    documentURL: "",
    interest: [],
    projectTags: [],
    profileImageUrl: "/src/assets/IMG_20240127_171651_857.jpg",
    isAdmin: true,
    badgeImageUrl: "/src/assets/MoneyView.jpeg",
};
