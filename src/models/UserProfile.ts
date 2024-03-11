import { DEFUALT_INITIALISE_USER_PROFILE } from "../utils/contants";
import Employee from "./Employee";
import InterestTags from "./InterestTags";
import ProjectTags from "./ProjectTags";

class UserProfile {
    employee: Employee;
    interestTags: InterestTags[];
    projectTags: ProjectTags[];

    constructor() {
        this.employee = DEFUALT_INITIALISE_USER_PROFILE.employee;
        this.interestTags = DEFUALT_INITIALISE_USER_PROFILE.interestTags;
        this.projectTags = DEFUALT_INITIALISE_USER_PROFILE.projectTags;
    }
}

export default UserProfile;
