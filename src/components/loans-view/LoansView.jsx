import React from "react";
import { BsHandbag } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { BiCoinStack } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import {
  View,
  Wrapper,
  IconWrapper,
  Line,
  Details,
  Value,
  Description,
  Date,
} from "./styles";

const LoansView = () => {
  const array = [
    {
      value: (
        <span style={{ fontSize: "24px" }}>
          $100,000.<span style={{ fontSize: "18px" }}>00</span>
        </span>
      ),
      description: "Amount",
      icon: <BsHandbag size={36} />,
    },
    {
      value: (
        <span style={{ fontSize: "24px" }}>
          $100,000.<span style={{ fontSize: "18px" }}>00</span>
        </span>
      ),
      description: "Monthly Installment",
      icon: <VscGraphLine size={36} />,
    },
    {
      value: (
        <span style={{ fontSize: "24px" }}>
          00.<span style={{ fontSize: "18px" }}>00</span>%
        </span>
      ),
      description: "Rate",
      icon: <BiCoinStack size={36} />,
    },
    {
      value: <span style={{ fontSize: "24px" }}>8/12</span>,
      description: "Last Installment",
      icon: <IoCalendarOutline size={36} />,
      date: "00-00-0000",
    },
  ];
  return array.map((item, i) => {
    return (
      <Wrapper key={i}>
        <View>
          <IconWrapper>{item.icon}</IconWrapper>
          <Details>
            <Value>{item.value}</Value>
            <Description>{item.description}</Description>
            {item.date && <Date>{item.date}</Date>}
          </Details>
        </View>
        <Line />
      </Wrapper>
    );
  });
};

export default LoansView;
