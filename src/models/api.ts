import Employee from "./Employee";

const testData: Employee = { name: "NAYA MAL", employeeId: "12", designation: "HA BHAIII BHAROSA RAKH", level: "0", slackURL: "", managerId: "0", emailId: "", contactNo: "", children: [], documentURL: "", interest: [], projectTags: [], profileImageUrl: "src/assets/IMG_20240127_171651_857.jpg", isAdmin: false };

export function getNodeData(): Employee {
    return testData;
}
