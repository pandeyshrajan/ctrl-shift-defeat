import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./DirectReportiesList.css";
import Employee from "../../models/Employee";
import { store } from "../../stores/userProfileStore";

function DirectReportiesList() {
    function displayList() {
        // const currentShownProfile: Employee = store.getCurrentProfile().employee;
        // console.log(currentShownProfile);

        return store.directReporties.map((child: Employee) => {
            return (
                <>
                    <ListItem className="reportee-item detail-card">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={child.profileImageUrl} />
                        </ListItemAvatar>
                        <ListItemText className="text-white" primary={child.name} secondary={<React.Fragment>{child.designation}</React.Fragment>} />
                    </ListItem>
                </>
            );
        });
    }

    return <List className="direct-reporties-list">{displayList()}</List>;
}

export default DirectReportiesList;
