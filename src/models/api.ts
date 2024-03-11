// import { get } from "firebase/database";
import Employee from "./Employee";

// const testData: Employee = { name: "NAYA MAL", employeeId: "12", designation: "HA BHAIII BHAROSA RAKH", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false };

class Api {
    constructor() {}

    public getReportees = async (curId: number) => {
        const response = await fetch(`http://localhost:8080/api/employee/reportee/${curId}`);
        const data: Employee[] = await response.json();
        return data;
    };

    public getUserProfile = async (curId: number) => {
        const response = await fetch(`http://localhost:8080/api/employee/profile/${curId}`);
        const data: Employee[] = await response.json();
        return data;
    };
}

export const api = new Api();
