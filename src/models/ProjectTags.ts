import { PROJECT_TAGS_INITIALISE } from "../utils/contants";

class ProjectTags {
    projectId: string;
    name: string;
    projectUrl: string;
    projectManager: string;

    constructor() {
        this.projectId = PROJECT_TAGS_INITIALISE.projectId;
        this.name = PROJECT_TAGS_INITIALISE.name;
        this.projectUrl = PROJECT_TAGS_INITIALISE.projectUrl;
        this.projectManager = PROJECT_TAGS_INITIALISE.projectManager;
    }
}

export default ProjectTags;
