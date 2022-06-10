import React from "react";
import Payments from "../../components/payments/Payments";
import { Banner, ContentWrapper } from "./styles";

const Transactions = () => {
  const array = [
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "20-07-2015",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "15-03-2015",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "14-06-2016",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "30-01-2018",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "10-11-2018",
    },
    {
      price: 1500500,
      type: "Payment of Installment",
      date: "25-05-2019",
    },
  ];

  return (
    <>
      <Banner>
        <p>Transactions</p>
      </Banner>
      <ContentWrapper>
        <Payments data={array} />
      </ContentWrapper>
    </>
  );
};

export default Transactions;
