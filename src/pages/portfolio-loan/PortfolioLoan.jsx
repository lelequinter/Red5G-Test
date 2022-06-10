import React from "react";
import Loans from '../../components/loans/Loans'
import { Portfolioloan, ContentWrapper } from "./styles";

function PortfolioLoan() {
  return (
    <>
      <Portfolioloan>
        <p>Portfolio Loan</p>
      </Portfolioloan>
      <ContentWrapper>
        <Loans/>
      </ContentWrapper>
    </>
  );
}

export default PortfolioLoan;
