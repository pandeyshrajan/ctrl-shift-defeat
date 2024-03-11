import { INTEREST_TAGS_INITIALISE } from "../utils/contants";

class InterestTags {
    interestId: string;
    interestName: string;
    interestUrl: string;

    constructor() {
        this.interestId = INTEREST_TAGS_INITIALISE.interestId;
        this.interestName = INTEREST_TAGS_INITIALISE.interestName;
        this.interestUrl = INTEREST_TAGS_INITIALISE.interestUrl;
    }
}

export default InterestTags;
