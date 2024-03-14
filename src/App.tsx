import { observer } from "mobx-react";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { commonStore } from "./stores/commonStore";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import redirect from "react-router-dom";
import { useNavigate } from "react-router-dom";

const App = () => {
    return (
        <>
            <div>
                <Toaster />
            </div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {commonStore.loginUserId !== -1 && <Route path="/dashboard" element={<Dashboard />} />}
            </Routes>
        </>
    );
};

export default observer(App);
