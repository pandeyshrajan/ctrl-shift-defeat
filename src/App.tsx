import ProfileCard from "./components/UserProfile/ProfileCard";
import SearchList from "./components/SearchBar/SearchList";
import TreeReportiesComponent from "./components/MoreDetails/DetailsComponent";
import "./App.css";
import { observer } from "mobx-react";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
    return (
        // <LoginPage />
        <div className="root-div">
            <div className="nav-styles font-bold opacity-95 sticky min-h-16 text-3xl">People Portal</div>
            <div className="main-container">
                <div className="color-white flex flex-row h-dvh m-2 rounded-lg">
                    <div className="search-tab basis-1/4 rounded-lg" data-aos="fade-right">
                        <SearchList />
                    </div>
                    <div className="basis-3/4 flex flex-col rounded-lg">
                        <div className="profile-component flex justify-between gradient-color pl-10 pr-10 rounded-lg items-center" data-aos="fade-down">
                            <ProfileCard />
                        </div>
                        <div className="info-section gradient-color">
                            <TreeReportiesComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(App);
