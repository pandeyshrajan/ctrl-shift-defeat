import TreeViewComponent from "../TreeView/TreeViewComponent";
import { useState, useEffect } from "react";
import { store } from "../../stores/userProfileStore";
import { observer } from "mobx-react";
import { Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import DirectReportiesList from "../DirectReportiesList/DirectReportiesList";
import "./DetailsComponent.css";
import PersonalDetails from "../PersonalInfo/PersonalDetails";
import { Icon } from "@iconify/react/dist/iconify.js";

import CsvDownloadButton from "react-json-to-csv";
import { api } from "../../models/api";

function TreeReportiesComponent() {
    useEffect(() => {
        (async () => await callData())();
    }, []);

    const [style, setStyle] = useState(".me-2");
    const [csvData, setCsvData] = useState({});

    const handleChange = (event: any, newValue: string) => {
        store.setTabValue(newValue);
    };

    const toggleFullScreen = () => {
        const element = document.querySelector(".details-component");
        const isFullScreen = document.fullscreenElement;

        if (!isFullScreen) {
            element?.requestFullscreen();
        }
    };

    const callData = async () => {
        const curData = await api.getReportees(store.getCurrentProfile().employee.employeeId);
        setCsvData(curData);
    };

    return (
        <div className="details-component overflow-hidden">
            <div className="details-header sticky">
                <Tabs className="section-bar rounded-3xl opacity-95 align-middle" value={store.getTabValue()} textColor="inherit" onChange={handleChange} aria-label="secondary tabs example" TabIndicatorProps={{ style: { backgroundColor: "#ffd180", borderBottom: "2px solid rgba(213, 255, 76, 0.623)" } }}>
                    <Tab value="one" label="More Info" className="m-2" sx={{ color: "#e0e0e0" }} />
                    <Tab value="two" label="Hierarchy Tree" className="m-2" sx={{ color: "#e0e0e0" }} />
                    <Tab value="three" label="Direct Reportees" className="m-2" sx={{ color: "#e0e0e0" }} />

                    {/* {store.getTabValue() == "three" && (
                        <>
                            <Input
                                startDecorator={<SearchTwoTone />}
                                endDecorator={<Button type="submit">Search</Button>}
                                sx={{
                                    "--Input-radius": "16px",
                                    "--Input-decoratorChildHeight": "38px",
                                }}
                                placeholder="Search"
                                onChange={handleFormInput}
                                autoComplete="on"
                                className="m-1 ml-3 mr-3 shadow-lg"
                            /> */}
                    {/* <Button onClick={showSearchBar}>Search</Button>
                            <input className={style} /> */}
                    {/* </>
                    )} */}
                    {/* {store.getTabValue() == "three" && <CsvDownloadButton data={csvData} />} */}
                </Tabs>

                <div className="download-fullScreen">
                    {store.getTabValue() == "three" && <Icon className="ml-1" icon="line-md:download-loop" width="2.7em" height="2.7em" style={{ color: "white" }} />}
                    <Icon className="ml-1" icon="mingcute:fullscreen-fill" width="2.7em" height="2.7em" style={{ color: "white" }} onClick={toggleFullScreen} />
                </div>
            </div>
            {store.getTabValue() == "one" && <PersonalDetails />}
            {store.getTabValue() == "two" && <TreeViewComponent />}
            {store.getTabValue() == "three" && <DirectReportiesList />}
        </div>
    );
}

export default observer(TreeReportiesComponent);
