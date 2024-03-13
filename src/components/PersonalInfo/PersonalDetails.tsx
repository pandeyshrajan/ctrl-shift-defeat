import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import { DOCUMENTS, PERSONAL_INFO } from "../../utils/contants";
import "./PersonalDetails.css";
import { store } from "../../stores/userProfileStore";
import { observer } from "mobx-react";
import { Icon } from "@iconify/react/dist/iconify.js";

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
                        <Icon className="animate-button-hover" icon="line-md:downloading-loop" width="2em" height="2em" style={{ color: "white" }} />
                        <Icon className="animate-button-hover" icon="line-md:uploading-loop" width="2em" height="2em" style={{ color: "white" }} />
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="more-info flex flex-col p-0">
            <div className="personal-details p-8 basis-3/4">{form()}</div>
            {store.isAdmin && (
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
