import TreeViewComponent from "../TreeView/TreeViewComponent";
import { useState } from "react";
import { store } from "../../stores/profileStore";
import { observer } from "mobx-react";
import { Tab } from "@mui/material";
import { Button } from "@mui/joy";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import DirectReportiesList from "../DirectReportiesList/DirectReportiesList";
import FullScreenIcon from "../../assets/icon-park--full-screen.svg";
import "./DetailsComponent.css";
import PersonalDetails from "../PersonalInfo/PersonalDetails";
import Search from "../SearchBar/Search";

function TreeReportiesComponent() {
    const [style, setStyle] = useState(".me-2");

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

    const showSearchBar = () => {
        setStyle("search-on-click");
    };

    return (
        <div className="details-component bg-gradient-to-l from-stone-100 to-stone-300 mt-2 rounded-lg overflow-hidden" data-aos="fade-up">
            <Box sx={{ width: "100%" }}>
                <Tabs className="bg-stone-400 m-1 rounded-lg" value={store.getTabValue()} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="secondary tabs example">
                    <Tab value="one" label="More Info" className="m-2" />
                    <Tab value="two" label="Hierarchy Tree" className="m-2" />
                    <Tab value="three" label="Direct Reporties" className="m-2" />

                    {store.getTabValue() == "three" && <Button className="rounded-lg">Download CSV</Button>}
                    {store.getTabValue() == "three" && (
                        <>
                            <Search />
                            {/* <Button onClick={showSearchBar}>Search</Button>
                            <input className={style} /> */}
                        </>
                    )}
                    <img className="m-2" src={FullScreenIcon} onClick={toggleFullScreen} style={{ cursor: "pointer" }} />
                </Tabs>
            </Box>
            {store.getTabValue() == "one" && <PersonalDetails />}
            {store.getTabValue() == "two" && <TreeViewComponent />}
            {store.getTabValue() == "three" && <DirectReportiesList />}
        </div>
    );
}

export default observer(TreeReportiesComponent);
