import TreeViewComponent from "./TreeView/TreeViewComponent";
import { store } from "../stores/userProfileStore";
import { observer } from "mobx-react";
import { Button, Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import DirectReportiesList from "./DirectReportiesList/DirectReportiesList";

function TreeReportiesComponent() {
    const handleChange = (event: any, newValue: string) => {
        // store.toggleView(newValue);
        store.setTabValue(newValue);
    };

    return (
        <div className="tree-component bg-gradient-to-l from-cyan-100 to-blue-300 mt-2 rounded-lg overflow-hidden" data-aos="fade-up">
            <Box sx={{ width: "100%" }}>
                <Tabs className="bg-gray-200 opacity-70 m-1 rounded-lg" value={store.getTabValue()} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="secondary tabs example">
                    <Tab value="one" label="Tree View" className="m-2" />
                    <Tab value="two" label="Direct Reporties" className="m-2" />
                    <Tab value="three" label="Personal Info" className="m-2" />
                    {store.getTabValue() == "two" && <Button>Download CSV</Button>}
                    {store.getTabValue() == "two" && <Button>Search</Button>}
                </Tabs>
            </Box>
            {store.getTabValue() == "one" && <TreeViewComponent />}
            {store.getTabValue() == "two" && <DirectReportiesList />}
        </div>
    );
}

export default observer(TreeReportiesComponent);
