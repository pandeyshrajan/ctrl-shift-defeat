import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import UploadImageIcon from "../../assets/bxs--image-add.svg";
import { store } from "../../stores/userProfileStore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { observer } from "mobx-react";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    // height: "20%",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function PopUp() {
    const uploadImage = async (event: any) => {
        const imageUpload = event.target.files[0];
        console.log(imageUpload);

        const imageRef = ref(storage, `${store.loggedInUser.employee.employeeId}/image/ProfileImage`);
        console.log(imageRef);

        const response = await uploadBytes(imageRef, imageUpload);
        console.log(response);

        const url = await getDownloadURL(imageRef);
        console.log(url);

        store.profileImage = url;
        store.closePopUp();
    };

    const togglePopUp = () => {
        store.uploadPopUp = !store.uploadPopUp;
    };

    return (
        <div>
            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg deep-link " src={UploadImageIcon} onClick={togglePopUp} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={store.uploadPopUp}
                onClose={togglePopUp}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={store.uploadPopUp}>
                    <Box sx={style}>
                        <input className="p-2 bg-stone-500" type="file" onChange={uploadImage} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default observer(PopUp);
