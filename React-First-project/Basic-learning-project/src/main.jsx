import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Bar from "./bar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Bar/>
  </StrictMode>
);
