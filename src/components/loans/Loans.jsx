import React from "react";
import { BsEye, BsFileEarmarkText } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  Loan,
  Title,
  Details,
  Detail,
  IconsSection,
  IconWrapper,
  Line,
} from "./styles";

const Loans = () => {
  const Array = [
    { key: 1, date: "20-07-2015" },
    { key: 2, date: "15-03-2015" },
    { key: 3, date: "14-06-2016" },
    { key: 4, date: "30-01-2018" },
    { key: 5, date: "10-11-2018" },
    { key: 6, date: "25-05-2019" },
    { key: 7, date: "9-08-2020" },
  ];

  return Array.map((item, i) => {
    return (
      <Wrapper key={item.key}>
        <Loan>
          <Title>Portfolio Loan PL-000</Title>
          <Details>
            <Detail>
              <p>Amount</p>
              <span>
                $ 0,000,000<span style={{ fontSize: "12px" }}>.00</span>
              </span>
            </Detail>
            <Detail>
              <p>Investment Date</p>
              <span>{item.date}</span>
            </Detail>
            <Detail>
              <p>Monthly Installment</p>
              <span>
                $ 0,000,000<span style={{ fontSize: "12px" }}>.00</span>
              </span>
            </Detail>
          </Details>
          <IconsSection>
            <IconWrapper>
              <BsFileEarmarkText size={25} />
            </IconWrapper>
            <NavLink to="/portfolio-loan/view">
              <IconWrapper>
                <BsEye size={30} />
              </IconWrapper>
            </NavLink>
          </IconsSection>
        </Loan>
        <Line />
      </Wrapper>
    );
  });
};

export default Loans;
