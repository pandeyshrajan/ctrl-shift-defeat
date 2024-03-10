import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import { DOCUMENTS, PERSONAL_INFO } from "../../utils/contants";
import "./PersonalDetails.css";
import { store } from "../../stores/profileStore";

function PersonalDetails() {
    const form = () => {
        const fields = Object.keys(PERSONAL_INFO).filter((v) => isNaN(Number(v)));

        return fields.map((element) => {
            return (
                <div className="p-1">
                    <p className="text-stone-600 ml-1 mb-1">{element}</p>
                    <Input className="list" placeholder="Placeholder" variant="soft" color="primary" value={"Shrajan pandey"} />
                </div>
            );
        });
    };

    const documents = () => {
        const fields = Object.keys(DOCUMENTS).filter((v) => isNaN(Number(v)));

        return fields.map((element) => {
            return <div className="list document bg-gray-300">{element}</div>;
        });
    };

    return (
        <div className="more-info flex flex-col p-0">
            <div className="personal-details p-8 columns-2 basis-3/4">{form()}</div>
            {store.isAdmin && (
                <>
                    <Divider orientation="horizontal"> Documents </Divider>
                    <div className="doucments-section p-8 columns-3 flex flex-row justify-around basis-1/4">{documents()}</div>
                </>
            )}
        </div>
    );
}

export default PersonalDetails;
