import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import UploadImageIcon from "../../assets/bxs--image-add.svg";
import { UploadFile } from "@mui/icons-material";
import CropEasy from "./ImageUpload/CropEasy";
import { Button, Input } from "@mui/material";
import UploadButton from "../../utils/components/UploadButton";
import { store } from "../../stores/userProfileStore";
import { observer } from "mobx-react";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function PopUp() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const check = (): boolean => {
    //     return store.uploadPopUp;
    // };

    return (
        <div>
            <img className="animate-button-hover m-1 bg-white p-2 rounded-lg deep-link " src={UploadImageIcon} onClick={store.openPopUp} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={store.getPopUpStatus()}
                onClose={store.closePopUp}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={store.getPopUpStatus()}>
                    <Box sx={style}>
                        <UploadButton />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default observer(PopUp);
