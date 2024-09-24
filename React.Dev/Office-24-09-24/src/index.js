import React, { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";

import AppComponent from "./app.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <AppComponent />
    </StrictMode>
);