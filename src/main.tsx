import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RootStore from "./stores/index.ts";

const rootStore = new RootStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App rootStore={rootStore} />
    </React.StrictMode>
);
