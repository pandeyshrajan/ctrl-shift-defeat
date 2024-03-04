import React from "react";
// import treeStore from "./treeStore";
import UserProfileStore from "./userProfileStore";

class RootStore {
    userProfileStore: any;

    constructor() {
        console.log("HEY");
        this.userProfileStore = new UserProfileStore();
    }
}

// const StoresContext = React.createContext(new RootStore());

// this will be the function available for the app to connect to the stores
// export const useStores = () => React.useContext(StoresContext);

export default RootStore;
