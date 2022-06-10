import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home/Home";
import PortfolioLoan from "./portfolio-loan/PortfolioLoan";

const Pages = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio-loan" element={<PortfolioLoan />} />
    </Routes>
  );
};

export default Pages;
