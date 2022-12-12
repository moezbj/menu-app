import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cake from "./pages/Cake";

const RoutesPage = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cake" element={<Cake />} />

  </Routes>
  );
};

export default RoutesPage;
