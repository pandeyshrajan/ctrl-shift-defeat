import { observer } from "mobx-react";
import { Tab } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import CsvDownloadButton from "react-json-to-csv";
import Tabs from "@mui/material/Tabs";

import { store } from "../../stores/userProfileStore";
import TreeViewComponent from "../TreeView/TreeViewComponent";
import PersonalDetails from "../PersonalInfo/PersonalDetails";
import DirectReportiesList from "../DirectReportiesList/DirectReportiesList";
import { commonStore } from "../../stores/commonStore";

import "./DetailsComponent.css";

function TreeReportiesComponent() {
    const handleChange = (event: any, newValue: string) => {
        store.setTabValue(newValue);
    };

    const toggleFullScreen = () => {
        let element = document.querySelector(".details-component");
        const isFullScreen = document.fullscreenElement;

        if (!isFullScreen) {
            commonStore.isFullScreen = true;
            element?.requestFullscreen();
            document.querySelector(".details-component")?.classList.add("full-screen");
        } else {
            commonStore.isFullScreen = false;
            document.exitFullscreen();
            document.querySelector(".details-component")?.classList.remove("full-screen");
        }
    };

    return (
        <div className="details-component overflow-hidden">
            <div className="details-header sticky">
                <Tabs className="section-bar rounded-3xl opacity-95 align-middle" value={store.getTabValue()} textColor="inherit" onChange={handleChange} aria-label="secondary tabs example" TabIndicatorProps={{ style: { backgroundColor: "#ffd180", borderBottom: "2px solid rgba(213, 255, 76, 0.623)" } }}>
                    <Tab value="one" label="More Info" className="m-2" sx={{ color: "#e0e0e0" }} />
                    <Tab value="two" label="Hierarchy Tree" className="m-2" sx={{ color: "#e0e0e0" }} />
                    <Tab value="three" label="Direct Reportees" className="m-2" sx={{ color: "#e0e0e0" }} />
                </Tabs>

                <div className="download-fullScreen">
                    {store.getTabValue() == "one" && <Icon className="ml-1 animate-button-hover" icon="line-md:edit-twotone-full" width="2.7em" height="2.7em" style={{ color: "white" }} />}
                    {store.getTabValue() == "three" && (
                        <>
                            <label htmlFor="download-csv">
                                <Icon className="ml-1 animate-button-hover" icon="line-md:download-loop" width="2.7em" height="2.7em" style={{ color: "white" }} />
                            </label>
                        </>
                    )}
                    {store.getTabValue() == "three" && <CsvDownloadButton className="hidden" id="download-csv" data={store.directReporties} />}
                    {commonStore.isFullScreen === false && <Icon className="ml-1 animate-button-hover" icon="mingcute:fullscreen-fill" width="2.7em" height="2.7em" style={{ color: "white" }} onClick={toggleFullScreen} />}
                    {commonStore.isFullScreen && <Icon className="ml-1 animate-button-hover" icon="line-md:close" width="2.7em" height="2.7em" style={{ color: "white" }} onClick={toggleFullScreen} />}
                </div>
            </div>
            {store.getTabValue() == "one" && <PersonalDetails />}
            {store.getTabValue() == "two" && <TreeViewComponent />}
            {store.getTabValue() == "three" && <DirectReportiesList />}
        </div>
    );
}

export default observer(TreeReportiesComponent);
