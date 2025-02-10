
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ 使用 createRoot
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './stylesheets/index.css';


/**
 * The root entry point of the application.
 * Uses React 18's `createRoot` for rendering.
 */
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

