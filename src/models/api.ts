// import { get } from "firebase/database";
import Employee from "./Employee";
import UserProfile from "./UserProfile";

// const testData: Employee = { name: "NAYA MAL", employeeId: "12", designation: "HA BHAIII BHAROSA RAKH", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false };

class Api {
    constructor() {}

    public getReportees = async (curId: number) => {
        const response = await fetch(`http://localhost:8080/api/employee/reportee/${curId}`);
        const data: Employee[] = await response.json();
        console.log(data);

        return data;
    };

    public getUserProfile = async (curId: number) => {
        const response = await fetch(`http://localhost:8080/api/employee/profile/${curId}`);
        const data: UserProfile = await response.json();
        return data;
    };

    public getManager = async (emplId: number) => {
        const response = await fetch(`http://localhost:8080/api/employee/manager/${emplId}`);
        const data: Employee = await response.json();
        return data;
    };

    public searchByName = async (name: string) => {
        const response = await fetch(`http://localhost:8080/api/employee/name/${name}`);
        const data: Employee[] = await response.json();
        return data;
    };

    public searchByProject = async (projectId: string) => {
        const response = await fetch(`http://localhost:8080/api/employee/projectEmployees/${projectId}`);
        const data: Employee[] = await response.json();
        return data;
    };

    public searchByInterest = async (interestId: string) => {
        const response = await fetch(`http://localhost:8080/api/employee/interestEmployees/${interestId}`);
        const data: Employee[] = await response.json();
        return data;
    };

    public searchByID = async (Id: number) => {
        const response = await fetch(`http://localhost:8080/api/employee/${Id}`);
        const data: Employee[] = await response.json();
        return data;
    };
}

export const api = new Api();
