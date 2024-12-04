import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </HelmetProvider>
  </StrictMode>
);
