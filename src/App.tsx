import ProfileCard from "./components/UserProfile/ProfileCard";
import SearchList from "./components/SearchBar/SearchList";
import TreeReportiesComponent from "./components/TreeReportiesComponent";
import "./App.css";
import { observer } from "mobx-react";

const App = () => {
    return (
        <div>
            <div className="text-center font-bold text-stone-100 opacity-95 sticky top-0 min-h-16 bg-gray-800 pt-4 text-2xl">PEOPLE PORTAL</div>
            <div className="flex flex-row h-dvh m-2 rounded-lg">
                <div className="search-tab basis-1/4 bg-gradient-to-l from-cyan-100 to-blue-300 m-2 rounded-lg p-1" data-aos="fade-right">
                    <SearchList />
                </div>
                <div className="basis-3/4 flex flex-col m-2 rounded-lg">
                    <div className="profile-component flex bg-gradient-to-l from-cyan-100 to-blue-300 mb-2 rounded-lg items-center pl-10" data-aos="fade-down">
                        <ProfileCard />
                    </div>
                    <TreeReportiesComponent />
                </div>
            </div>
        </div>
    );
};

export default observer(App);
