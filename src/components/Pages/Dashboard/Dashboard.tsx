import SearchList from "../../SearchBar/SearchList";
import ProfileCard from "../../UserProfile/ProfileCard";
import TreeReportiesComponent from "../../MoreDetails/DetailsComponent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./Dashboard.css";
import { searchBarStore } from "../../../stores/searchBarStore";
import { commonStore } from "../../../stores/commonStore";
import { store } from "../../../stores/userProfileStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Modal } from "@mui/material";
import { observer } from "mobx-react";

function Dashboard() {
    const navigate = useNavigate();
    if (!sessionStorage.getItem("user")) {
        navigate("/");
    }
    const logout = async () => {
        commonStore.startLoader();
        store.flushData();
        searchBarStore.flushData();
        commonStore.flushData();

        setTimeout(() => commonStore.stopLoader(), 500);
        sessionStorage.removeItem("user");
        setTimeout(() => navigate("/"), 1200);
        setTimeout(() => toast.success("Logged out succefully"), 1200);
    };

    const toggleSideBar = () => {
        commonStore.toggleSearchBar();
    };

    return (
        <>
            <div className="dashboard-container flex h-screen flex-col">
                <div className="nav-bar font-bold text-stone-100 sticky flex flex-row justify-between">
                    <Icon className="animate-button-hover search-bar-icon" icon="line-md:menu-fold-right" width="1.2em" height="1.2em" style={{ color: "white" }} onClick={toggleSideBar} />
                    <span>People Portal</span>
                    <Icon className="animate-button-hover" icon="line-md:logout" width="1.2em" height="1.2em" style={{ color: "white" }} onClick={logout} />
                </div>
                <div className="main-container flex-grow w-full">
                    <div className="containing-div glass h-full w-full">
                        <div className="search-tab flex flex-col glass h-full w-1/4 gradient-color" data-aos="fade-right">
                            <div className="search-part h-3/5">
                                <SearchList />
                            </div>
                            <div className="calander-container h-2/5 align-middle">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar className="calander" />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <Modal className="searchbar-popup" open={commonStore.openSearchBar}>
                            <div className="search-tab-mobile flex flex-col glass h-full gradient-color" data-aos="fade-right">
                                <div className="search-part-mobile h-3/5">
                                    <SearchList />
                                </div>
                                <div className="calander-container-mobile h-2/5 align-middle">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar className="calander" />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </Modal>
                        <div className="right-half flex flex-col h-full flex-grow">
                            <div className="profile-component global-border glass" data-aos="fade-down">
                                <ProfileCard />
                            </div>
                            <div className="info-section glass flex-grow" data-aos="fade-up">
                                <TreeReportiesComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(Dashboard);
