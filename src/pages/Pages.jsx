import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home/Home";
import PortfolioLoanView from "./portfolio-loan-view/PortfolioLoanView";
import PortfolioLoan from "./portfolio-loan/PortfolioLoan";
import Transactions from "./trasnsactions/Transactions";

const Pages = () => {
  const location = useLocation();

  return (
    // En este archivo tenemos englobadas todas nuestras pages en las cuales
    // navegaremos en nuestra aplicacion cons sus respectivas urls.
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio-loan" element={<PortfolioLoan />} />
      <Route path="/portfolio-loan/view" element={<PortfolioLoanView />} />
      <Route
        path="/portfolio-loan/view/transactions"
        element={<Transactions />}
      />
    </Routes>
  );
};

export default Pages;
