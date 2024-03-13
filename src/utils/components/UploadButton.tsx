import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { store } from "../../stores/userProfileStore";
const { Dragger } = Upload;
import { observer } from "mobx-react";

const uploadImage = async (event: any) => {
    console.log(event);

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

const props: UploadProps = {
    name: "file",
    multiple: false,
    // action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    accept: "image/*",
    maxCount: 1,
    onChange: uploadImage,
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
    },
};

const UploadButton = () => (
    // <Dragger {...props}>
    <p className="ant-upload-drag-icon"></p>
);

export default UploadButton;
