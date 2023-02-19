import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

import Nav from "./components/nav/Nav";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<Nav />} />
      <Route path="/detail/:id" element={<Details />} />
    </Routes>
  );
};

export default RoutesPage;
