import SearchList from "../../SearchBar/SearchList";
import ProfileCard from "../../UserProfile/ProfileCard";
import TreeReportiesComponent from "../../MoreDetails/DetailsComponent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./Dashboard.css";
function Dashboard() {
    return (
        <div className="dashboard-container flex h-screen flex-col">
            <div className="nav-bar font-bold text-stone-100 sticky ">People Portal</div>
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
    );
}

export default Dashboard;
