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
        // <LoginPage />
        <div className="bg-indigo-200">
            <div className="text-center font-bold text-stone-900 opacity-95 sticky top-0 min-h-16 bg-white pt-4 text-2xl">PEOPLE PORTAL</div>
            <div className="flex flex-row h-dvh m-2 rounded-lg">
                <div className="search-tab basis-1/4 gradient-color rounded-lg m-2" data-aos="fade-right">
                    <SearchList />
                </div>
                <div className="basis-3/4 flex flex-col m-2 rounded-lg">
                    <div className="profile-component flex justify-between gradient-color mb-2 pl-10 pr-10 rounded-lg items-center" data-aos="fade-down">
                        <ProfileCard />
                    </div>
                    <div className="info-section">
                        <TreeReportiesComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(App);
