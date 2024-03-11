import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./DirectReportiesList.css";
import Employee from "../../models/Employee";
import { store } from "../../stores/profileStore";

function DirectReportiesList() {
    function displayList() {
        return store.currentUser.children?.map((empl: Employee) => {
            return (
                <>
                    <ListItem alignItems="flex-start" className="direct-reporties gradient-color-r m-2 rounded-lg p-1 shadow-xl">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={empl.profileImageUrl} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={empl.name}
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                        {empl.designation}
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </>
            );
        });
    }

    return <List>{displayList()}</List>;
}

export default DirectReportiesList;
