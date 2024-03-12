import ProfileCard from "./components/UserProfile/ProfileCard";
import SearchList from "./components/SearchBar/SearchList";
import TreeReportiesComponent from "./components/MoreDetails/DetailsComponent";
import "./App.css";
import { observer } from "mobx-react";
import LoginPage from "./components/LoginPage/LoginPage";
import { useEffect } from "react";
import { store } from "./stores/userProfileStore";
import { api } from "./models/api";

const App = () => {
    useEffect(() => {
        (async () => await store.initialLoading())();
    }, []);

    return (
        <>
            {/* <LoginPage /> */}
            <div className="flex h-screen flex-col">
                <div className="nav-bar font-bold text-stone-100 sticky text-4xl">People Portal</div>
                <div className="main-container flex-grow w-full">
                    <div className="containing-div flex glass flex-row h-full w-full">
                        <div className="search-tab flex flex-col glass h-full w-1/4 gradient-color" data-aos="fade-right">
                            <div className="search-part h-1/2">
                                <SearchList />
                            </div>
                            <div></div>
                        </div>
                        <div className="right-halt flex flex-col h-full flex-grow">
                            <div className="profile-component global-border glass flex h-1/4 justify-between pl-10 pr-10 items-center" data-aos="fade-down">
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
};

export default observer(App);
