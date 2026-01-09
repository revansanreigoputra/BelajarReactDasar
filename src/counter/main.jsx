import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./CounterApp.jsx";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <CounterApp />
        </StrictMode>
    );