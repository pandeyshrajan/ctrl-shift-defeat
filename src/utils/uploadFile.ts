import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { store } from "../stores/userProfileStore";

const uploadFile = async (props: any) => {
    const { file, type } = props;
    console.log(file);

    console.log(type);

    let location = "";

    switch (type) {
        case "Image": {
            location = `${store.getCurrentProfile().employee.employeeId}/image/ProfileImage`;
            break;
        }
        case "Aadhar Card": {
            location = `3/document/Aadhar`;
            break;
        }
        case "Pan Card": {
            location = `${store.getCurrentProfile().employee.employeeId}/document/PanCard`;
            break;
        }
        case "Offer Letter": {
            location = `${store.getCurrentProfile().employee.employeeId}/document/OfferLetter`;
            break;
        }
        case "Bank Detail": {
            location = `${store.getCurrentProfile().employee.employeeId}/document/BankDetails`;
            break;
        }
    }

    const fileRef = ref(storage, location);
    console.log(fileRef);

    const response = await uploadBytes(fileRef, file);
    console.log(response);

    const url = await getDownloadURL(fileRef);
    console.log(url);

    if (type === "Image") {
        store.profileImage = url;
    }
};

export default uploadFile;
