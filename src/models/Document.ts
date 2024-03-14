import { DEFUALT_INITIALISE_DOCUMENTS } from "../utils/contants";

class Document {
    employeeId: number;
    aadharUrl: string;
    panUrl: string;
    offerLetterUrl: string;
    bankDetailsUrl: string;

    constructor() {
        this.employeeId = DEFUALT_INITIALISE_DOCUMENTS.employeeId;
        this.aadharUrl = DEFUALT_INITIALISE_DOCUMENTS.aadharUrl;
        this.offerLetterUrl = DEFUALT_INITIALISE_DOCUMENTS.offerLetterUrl;
        this.panUrl = DEFUALT_INITIALISE_DOCUMENTS.panUrl;
        this.bankDetailsUrl = DEFUALT_INITIALISE_DOCUMENTS.bankDetailsUrl;
    }
}

export default Document;
