import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import { DOCUMENTS, PERSONAL_INFO } from "../../utils/contants";
import "./PersonalDetails.css";
import { store } from "../../stores/userProfileStore";
import { observer } from "mobx-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import uploadFile from "../../utils/uploadFile";

function PersonalDetails() {
    const form = () => {
        const fields = [];
        const currentEmployeeData = store.currentProfile.employee;

        Object.entries(currentEmployeeData).map((entry) => {
            let key = entry[0];
            let value = entry[1];
            console.log(key);

            if (key in PERSONAL_INFO) {
                fields.push({ key: PERSONAL_INFO[key], value: value });
            }
        });

        return fields.map((element) => {
            return (
                <div className="info-fields p-1">
                    <p className="text-white ml-1 mb-1">{element.key}</p>
                    <Input
                        placeholder="Placeholder"
                        variant="soft"
                        value={element.value}
                        sx={{
                            backgroundColor: "rgba(245, 245, 245, 0.48)",
                            color: "rgba(58,42,29, 0.90)",
                            fontWeight: "600",
                        }}
                    />
                </div>
            );
        });
    };

    const handleUpload = async (file: any, fileType: string) => {
        if (file) {
            console.log(fileType);
            console.log(file);

            await uploadFile({ file, type: fileType });
        } else {
            console.log("AYO");
        }
    };

    const documents = () => {
        const fields = Object.keys(DOCUMENTS).filter((v) => isNaN(Number(v)));

        return fields.map((element) => {
            return (
                <div
                    className="list document"
                    style={{
                        backgroundColor: "rgba(245, 245, 245, 0.48)",
                        color: "rgba(58,42,29, 0.90)",
                        fontWeight: "600",
                    }}
                >
                    {element}
                    <div className="document-icons">
                        <a href="https://firebasestorage.googleapis.com/v0/b/people-portal-75866.appspot.com/o/3%2Fdocument%2FBankDetails?alt=media&token=11cce1df-bc4a-451c-8666-5e200ff68832" target="_blank">
                            <Icon className="animate-button-hover" icon="majesticons:open-line" width="2em" height="2em" style={{ color: "white" }} />
                        </a>
                        {store.isAdmin && (
                            <>
                                <label htmlFor={`${element}`}>
                                    <Icon className="animate-button-hover" icon="line-md:uploading-loop" width="2em" height="2em" style={{ color: "white" }} />
                                </label>
                                <input className="hidden" id={`${element}`} type="file" onChange={(event) => handleUpload(event?.target.files[0], element)} key={element} />
                            </>
                        )}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="more-info flex flex-col p-0">
            <div className="personal-details p-8 basis-3/4">{form()}</div>
            {(store.isAdmin || store.isLoggedInUser()) && (
                <>
                    <Divider orientation="horizontal" sx={{ color: "white" }}>
                        {" "}
                        Documents{" "}
                    </Divider>
                    <div className="doucments-section p-8 columns-3 flex flex-row justify-around basis-1/4">{documents()}</div>
                </>
            )}
        </div>
    );
}

export default observer(PersonalDetails);
