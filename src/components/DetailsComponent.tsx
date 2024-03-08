import TreeViewComponent from "./TreeView/TreeViewComponent";
import { useState } from "react";
import { store } from "../stores/profileStore";
import { observer } from "mobx-react";
import { Button, Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import DirectReportiesList from "./DirectReportiesList/DirectReportiesList";
import FullScreenIcon from "../assets/icon-park--full-screen.svg";
import "./DetailsComponent.css";

function TreeReportiesComponent() {
    const [style, setStyle] = useState(".me-2");

    const handleChange = (event: any, newValue: string) => {
        store.setTabValue(newValue);
    };

    const toggleFullScreen = () => {
        const element = document.querySelector(".details-component");
        const isFullScreen = document.fullscreenElement;
        console.log("P ");

        if (!isFullScreen) {
            element?.requestFullscreen();
        }
    };

    const showSearchBar = () => {
        setStyle("search-on-click");
    };

    return (
        <div className="details-component bg-gradient-to-l from-stone-100 to-stone-300 mt-2 rounded-lg overflow-hidden" data-aos="fade-up">
            <Box sx={{ width: "100%" }}>
                <Tabs className="bg-stone-400 opacity-70 m-1 rounded-lg" value={store.getTabValue()} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="secondary tabs example">
                    <Tab value="one" label="Tree View" className="m-2" />
                    <Tab value="two" label="Direct Reporties" className="m-2" />
                    <Tab value="three" label="Personal Info" className="m-2" />

                    {store.getTabValue() == "two" && <Button>Download CSV</Button>}
                    {store.getTabValue() == "two" && (
                        <>
                            <Button onClick={showSearchBar}>Search</Button>
                            <input className={style} />
                        </>
                    )}
                    <img className="m-2" src={FullScreenIcon} onClick={toggleFullScreen} style={{ cursor: "pointer" }} />
                </Tabs>
            </Box>
            {store.getTabValue() == "one" && <TreeViewComponent />}
            {store.getTabValue() == "two" && <DirectReportiesList />}
        </div>
    );
}

export default observer(TreeReportiesComponent);
