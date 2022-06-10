import React from "react";
import { Transaction, Line, Wrapper, Price, Type, Date } from "./styles";

function Payments({ data }) {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return data.map((item, i) => {
    return (
      <Wrapper key={i}>
        <Transaction>
          <Price>
            $ {numberWithCommas(item.price)}
            <span>.00</span>
          </Price>
          <Type>{item.type}</Type>
          <Date>{item.date}</Date>
        </Transaction>
        <Line />
      </Wrapper>
    );
  });
}

export default Payments;
