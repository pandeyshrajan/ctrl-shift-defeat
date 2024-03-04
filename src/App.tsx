import ProfileCard from "./components/UserProfile/ProfileCard";
import SearchList from "./components/SearchBar/SearchList";
import TreeViewComponent from "./components/TreeView/TreeViewComponent";
import "./App.css";
import { useState } from "react";

function App({ rootStore }: any) {
    const [showTree, toggleShowtree] = useState(true);
    const myDiv = document.querySelector("#show-tree");
    const directReporties = document.querySelector(".direct-reporties");

    // add a click event listener to the div
    myDiv?.addEventListener("click", function () {
        console.log("HEY");
        toggleShowtree(true);
    });

    directReporties?.addEventListener("click", function () {
        console.log("wtf");

        toggleShowtree(false);
    });

    return (
        <div>
            {/* <TreeNodeCard /> */}
            <div className="text-center font-bold text-stone-100 opacity-70 sticky top-0 min-h-16 bg-gray-900 pt-4 text-2xl">PEOPLE PORTAL</div>
            <div className="flex flex-row h-dvh m-2 rounded-lg bg-teal-50">
                <div className="basis-1/4 bg-gradient-to-l from-cyan-100 to-blue-300 m-2 rounded-lg p-1" data-aos="fade-right">
                    <SearchList />
                </div>
                <div className="basis-3/4 flex flex-col m-2 rounded-lg">
                    <div className="profile-component flex bg-gradient-to-l from-cyan-100 to-blue-300 mb-2 rounded-lg items-center pl-10" data-aos="fade-down">
                        <ProfileCard rootStore={rootStore} />
                    </div>
                    <div className="tree-component bg-gradient-to-l from-cyan-100 to-blue-300 mt-2 rounded-lg overflow-hidden" data-aos="fade-up">
                        <div className="tree-nav-bar flex flex-row justify-around text-center">
                            <div id="show-tree" className="font-bold p-2 bg-gray-700 basis-1/2 text-white">
                                Tree View
                            </div>
                            <div className="font-bold direct-reporties p-2 bg-gray-800 basis-1/2 text-white opacity-70">Direct Reporties</div>
                        </div>
                        {showTree && <TreeViewComponent />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
