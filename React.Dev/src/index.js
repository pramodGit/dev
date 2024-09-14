import React, { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

import AppComponent from "./app.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <BrowserRouter>
            <AppComponent />
        </BrowserRouter>
    </StrictMode>
);