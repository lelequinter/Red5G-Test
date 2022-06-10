import React from "react";
import LoansView from "../../components/loans-view/LoansView";
import { ContentWrapper, Banner, Button } from "./styles";

const PortfolioLoanView = () => {
  return (
    <>
      <Banner>
        <p>PORTFOLIO LOAN PL-000</p>
      </Banner>
      <ContentWrapper>
        <LoansView />
        <Button to={"/portfolio-loan/view/transactions"}>TRANSACTIONS</Button>
      </ContentWrapper>
    </>
  );
};

export default PortfolioLoanView;
