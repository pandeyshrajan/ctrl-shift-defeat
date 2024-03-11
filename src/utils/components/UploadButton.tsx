import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { store } from "../../stores/profileStore";
const { Dragger } = Upload;

const uploadImage = async (info: any) => {
    const imageUpload = info.fileList[0];
    console.log(imageUpload);

    if (imageUpload == null) {
        return;
    }

    const imageRef = ref(storage, `${store.currentUser.employeeId}/image/${imageUpload.name}`);
    console.log(imageRef);

    const response = await uploadBytes(imageRef, imageUpload);
    console.log(response);

    const url = await getDownloadURL(imageRef);
    console.log(url);

    const { status } = info.file;
    console.log(status);

    if (status !== "uploading") {
        console.log(info.file, info.fileList);
    }
    if (status === "success") {
        message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
    }
};

const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    accept: "image/*",
    maxCount: 1,
    onChange: uploadImage,
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
    },
};

const UploadButton = () => (
    <Dragger {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or Drag Image to this area to upload</p>
    </Dragger>
);

export default UploadButton;
