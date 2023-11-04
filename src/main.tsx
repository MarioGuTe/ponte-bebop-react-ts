import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css";
import MemberContextProvider from "./contexts/MemberContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MemberContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MemberContextProvider>
  </BrowserRouter>
);
