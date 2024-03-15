import { observer } from "mobx-react";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { commonStore } from "./stores/commonStore";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FallingLines } from "react-loader-spinner";

const App = () => {
    return (
        <>
            <Modal open={commonStore.isLoading}>
                <div style={{ height: "100vh", alignItems: "center" }} className="main-loader flex justify-center">
                    <FallingLines color="white" width="100" visible={true} />
                </div>
            </Modal>
            <Toaster />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
};

export default observer(App);
