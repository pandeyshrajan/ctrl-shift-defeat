// import { get } from "firebase/database";
import { common } from "@mui/material/colors";
import { store } from "../stores/userProfileStore";
import Employee from "./Employee";
import UserProfile from "./UserProfile";
import { commonStore } from "../stores/commonStore";
import { BASE_URL, DEFUALT_INITIALISE_EMPLOYEE } from "../utils/contants";
import toast from "react-hot-toast";

class Api {
    constructor() {}

    public getReportees = async (curId: number) => {
        const response = await fetch(`${BASE_URL}/reportee/${curId}`);

        if (response.status != 200) {
            return [];
        }

        const data: Employee[] = await response.json();
        console.log(data);
        return data;
    };

    public getUserProfile = async (curId: number) => {
        const response = await fetch(`${BASE_URL}/profile/${curId}`);

        if (response.status != 200) {
            toast.error("Woopsis! Something went wrong.. Retry Logging in again .. !");
            return new UserProfile();
        }

        const data: UserProfile = await response.json();
        return data;
    };

    public getLimitedEmployee = async () => {
        const response = await fetch(`${BASE_URL}/limitedEmployee/15`);

        if (response.status != 200) {
            toast.error("Woopsis! Something went wrong.. Retry Logging in again .. !");
            return [];
        }
        const data: Employee[] = await response.json();
        return data;
    };

    public getManager = async (emplId: number) => {
        const response = await fetch(`${BASE_URL}/manager/${emplId}`);

        if (response.status != 200) {
            return DEFUALT_INITIALISE_EMPLOYEE;
        }

        const data: Employee = await response.json();
        return data;
    };

    public searchByName = async (name: string) => {
        const response = await fetch(`${BASE_URL}/name/${name}`);

        if (response.status != 200) {
            toast.error("No employee with this name.. !");
            return [];
        }

        const data: Employee[] = await response.json();
        return data;
    };

    public searchByProject = async (projectId: string) => {
        const response = await fetch(`${BASE_URL}/projectEmployees/${projectId}`);

        if (response.status != 200) {
            toast.error("No such project active.. !");
            return [];
        }

        const data: Employee[] = await response.json();
        return data;
    };

    public searchByInterest = async (interestId: string) => {
        const response = await fetch(`${BASE_URL}/interestEmployees/${interestId}`);

        if (response.status != 200) {
            toast.error("No such interests.. !");
            return [];
        }

        const data: Employee[] = await response.json();
        return data;
    };

    public searchByID = async (Id: number) => {
        const response = await fetch(`${BASE_URL}/${Id}`);

        if (response.status != 200) {
            toast.error("No such ID.. !");
            return [];
        }

        const data: Employee = await response.json();
        return [data];
    };

    public logInAuthentication = async (emailId: string, employeeId: number, password: string) => {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                employeeId: employeeId,
                emailId: emailId,
                password: password,
            }),
        });

        console.log("API RES");

        console.log(response.status);

        if (response.status != 200) {
            return { loginStatus: "User not found" };
        }

        const data = await response.json();
        return data;
    };
}

export const api = new Api();
