import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Search from "./Search";
import "./SearchBar.css";
import { DEMO_EMPLOYEES } from "../../utils/contants";
import Employee from "../../models/Employee";
import { observer } from "mobx-react";
import { searchBarStore } from "../../stores/searchBarStore";

function AlignItemsList() {
    const populateEmployee = () => {
        return searchBarStore.getFilteredEmployee().map((empl: Employee) => {
            return (
                <>
                    <ListItem alignItems="flex-start" className="detail-card p-0 mt-1">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={empl.profileImageUrl} />
                        </ListItemAvatar>
                        <ListItemText className="text-white" primary={empl.name} secondary={<React.Fragment>{empl.designation}</React.Fragment>} />
                    </ListItem>
                </>
            );
        });
    };

    return (
        <div className="search-section m-1">
            <Search />
            <List className="" sx={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }}>
                {populateEmployee()}
            </List>
        </div>
    );
}

export default observer(AlignItemsList);
