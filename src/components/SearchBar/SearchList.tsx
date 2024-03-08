import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import profileImage from "../../assets/IMG_20240127_171651_857.jpg";
import Search from "./Search";
import "./SearchBar.css";

export default function AlignItemsList() {
    return (
        <>
            <Search />
            <List className="m-2 " sx={{ width: "100%", maxWidth: "100%", maxHeight: "100%", overflow: "visible" }}>
                <ListItem alignItems="flex-start" className="detail-card bg-gradient-to-r from-white to-gray-300 rounded-lg mt-1 p-0 shadow-xl">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={profileImage} />
                    </ListItemAvatar>
                    <ListItemText primary="Shrajan Pandey" secondary={<React.Fragment>{"Software Developer Intern "}</React.Fragment>} />
                </ListItem>
                {/* <Divider variant="inset" component="li" /> */}
                <ListItem alignItems="flex-start" className="detail-card bg-gradient-to-r from-white to-gray-300 rounded-lg mt-2 p-0 shadow-xl">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src={profileImage} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                {/* <Divider variant="inset" component="li" /> */}
                <ListItem alignItems="flex-start" className="detail-card bg-gradient-to-r from-white to-gray-300 rounded-lg mt-2 p-0 shadow-xl">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src={profileImage} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                    Sandra Adams
                                </Typography>
                                {" — Do you have Paris recommendations? Have you ever…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start" className="detail-card bg-gradient-to-r from-white to-gray-300 mt-2 rounded-lg p-0 shadow-xl">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={profileImage} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start" className="detail-card bg-gradient-to-r from-white to-gray-300 mt-2 rounded-lg p-0 shadow-xl">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={profileImage} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start" className="detail-card bg-gradient-to-r from-white to-gray-300 mt-2 rounded-lg p-0 shadow-xl">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={profileImage} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start" className="detail-card bg-gradient-to-r from-white to-gray-300 mt-2 rounded-lg p-0 shadow-xl">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={profileImage} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </>
    );
}
