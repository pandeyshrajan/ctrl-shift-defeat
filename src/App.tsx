import { observer } from "mobx-react";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { commonStore } from "./stores/commonStore";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import "./App.css";

const App = () => {
    useEffect(() => {
        (async () => await commonStore.authenticateUser())();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* {commonStore.loginUserId != -1 && <Route path="/dashboard" element={<Dashboard />} />} */}

            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default observer(App);
