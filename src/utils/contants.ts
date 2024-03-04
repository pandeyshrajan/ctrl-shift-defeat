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
    profileImageURL: "",
};

export const EMPLOYEE_DUMMY: Employee = {
    name: "Shrajan",
    employeeId: "0",
    designation: "SDE Intern",
    level: "0",
    slackURL: "",
    managerId: "0",
    emailId: "",
    contactNo: "",
    children: [
        { name: "Lokesh", employeeId: "0", designation: "HA BHAIII BHAROSA RAKH", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [{ name: "Ramesh", employeeId: "0", designation: "BRUH WTF", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [], documentURL: "", interest: [], projectTags: [], profileImageURL: "src/assets/MoneyView.jpeg" }], documentURL: "", interest: [], projectTags: [], profileImageURL: "src/assets/IMG_20240127_171651_857.jpg" },
        { name: "Lokesh", employeeId: "0", designation: "HA BHAIII BHAROSA RAKH", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [{ name: "Ramesh", employeeId: "0", designation: "BRUH WTF", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", documentURL: "", interest: [], projectTags: [], profileImageURL: "src/assets/IMG_20240127_171651_857.jpg" }], documentURL: "", interest: [], projectTags: [], profileImageURL: "src/assets/MoneyView.jpeg" },
    ],
    documentURL: "",
    interest: [],
    projectTags: [],
    profileImageURL: "/src/assets/IMG_20240127_171651_857.jpg",
};
