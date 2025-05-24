import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 
      Wrap app with a centered 430px wide container
      and relative positioning to scope fixed elements 
    */}
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="relative overflow-hidden w-[430px] h-screen bg-white shadow-lg border border-gray-300 ">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
