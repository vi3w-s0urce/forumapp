import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Leaderboards from "./pages/Leaderboards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
