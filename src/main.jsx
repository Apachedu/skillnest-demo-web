import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DemoLanding from "./components/DemoLanding.jsx";
import DemoShowcase from "./components/DemoShowcase.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="sn-watermark">
      <div className="sn-content">
        <Routes>
          <Route path="/" element={<Navigate to="/demo" replace />} />
          <Route path="/demo" element={<DemoLanding />} />
          <Route path="/demo/:id" element={<DemoShowcase />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
