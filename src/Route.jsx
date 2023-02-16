import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<Nav />} />
    </Routes>
  );
};

export default RoutesPage;
