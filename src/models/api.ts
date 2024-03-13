// import { get } from "firebase/database";
import { common } from "@mui/material/colors";
import { store } from "../stores/userProfileStore";
import Employee from "./Employee";
import UserProfile from "./UserProfile";
import { commonStore } from "../stores/commonStore";

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

    public getLimitedEmployee = async () => {
        const response = await fetch(`http://localhost:8080/api/employee/limitedEmployee/15`);
        const data: Employee[] = await response.json();
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

    public logInAuthentication = async (emailId: string, employeeId: number, password: string) => {
        const response = await fetch("http://localhost:8080/api/employee/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                employeeId: 2,
                emailId: "",
                password: "password2",
            }),
        });

        console.log("API RES");

        console.log(response);
        const data = await response.json();
        return data;
    };
}

export const api = new Api();
