import { observer } from "mobx-react";
import { Button } from "@mui/material";

import { store } from "../../stores/userProfileStore";
import { commonStore } from "../../stores/commonStore";

import "./TreeNodeCard.css";

function TreeNodeCard(prop: any) {
    const { nodeDatum } = prop;

    const loadNewProfile = async (emplId: number) => {
        console.log("LOAD NEW PROFILE.....");
        await store.fetchClickedProfile(emplId);
    };

    const addNewChild = (e: any) => {
        store.fetchReportees(nodeDatum.employeeId);
    };

    const addManager = () => {
        store.newManager(nodeDatum.employeeId);
    };

    return (
        <>
            <div className="node-card" key={nodeDatum.employeeId}>
                <div className="node-image-container">
                    <img className="node-image" src={nodeDatum.profileImageUrl} alt="ProfilePhoto" onClick={() => loadNewProfile(nodeDatum.employeeId)} />
                </div>
                <div className="card-info flex flex-col justify-around">
                    <div className="about-container text-center">
                        <h3 className="name text-gray-100" style={{ fontSize: "28px", color: store.getCurrentProfile().employee.employeeId !== nodeDatum.employeeId ? "#efebe9" : "#69f0ae" }}>
                            {nodeDatum.name}
                        </h3>
                        <p className="text-white italic" style={{ fontSize: "13px" }}>
                            {" "}
                            {nodeDatum.designation}{" "}
                        </p>
                    </div>
                    <div className="buttons-wrap">
                        <div className="follow-wrap flex flex-row justify-around">
                            {commonStore.treeCurrentRootId == nodeDatum.employeeId && commonStore.treeCurrentRootId != 1 && (
                                <Button className="follow" onClick={addManager} style={{ backgroundColor: "rgba(58,42,29, 0.85)", color: "#efebe9", fontSize: "11px" }}>
                                    Manager
                                </Button>
                            )}
                            <Button className="follow" onClick={addNewChild} style={{ backgroundColor: "rgba(58,42,29, 0.85)", color: "#efebe9", fontSize: "11px" }}>
                                Reporties
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(TreeNodeCard);
