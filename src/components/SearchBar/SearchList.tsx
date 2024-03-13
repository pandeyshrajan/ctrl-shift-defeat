import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Search from "./Search";
import "./SearchBar.css";
import Employee from "../../models/Employee";
import { observer } from "mobx-react";
import { searchBarStore } from "../../stores/searchBarStore";
import { store } from "../../stores/userProfileStore";

function AlignItemsList() {
    const loadNewProfile = async (emplId: number) => {
        await store.fetchClickedProfile(emplId);
    };

    const populateEmployee = () => {
        return searchBarStore.getFilteredEmployee().map((empl: Employee) => {
            const emplId: number = empl.employeeId;

            return (
                <>
                    <ListItem alignItems="flex-start" className="detail-card p-0 mt-1" onClick={() => loadNewProfile(emplId)} key={empl.employeeId}>
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
            <List sx={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }}>{populateEmployee()}</List>
        </div>
    );
}

export default observer(AlignItemsList);
