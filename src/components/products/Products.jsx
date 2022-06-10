import React from "react";
import { FaHands } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  Wrapper,
  Logo,
  Product,
  Details,
  Name,
  Type,
  Price,
  Arrow,
  Line,
} from "./styles";

const Products = () => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const products = [
    {
      name: "Portfolio Loan",
      type: "Amount",
      price: 123123123,
      logo: <FaHands size={40} />,
    },
    {
      name: "Mortagage Loan",
      type: "Mortgage",
      price: 456456456,
      logo: <FiDatabase size={40} />,
    },
    {
      name: "DREI",
      type: "Investment",
      price: 623723623,
      logo: <HiOutlineHome size={40} />,
    },
  ];
  return products.map((product, i) => {
    return (
      <Wrapper key={i}>
        <Product>
          <Logo> {product.logo} </Logo>
          <Details>
            <Name>{product.name}</Name>
            <Type>{product.type}</Type>
            <Price>
              $ {numberWithCommas(product.price)}
              <span>.00</span>
            </Price>
            <Arrow>
              <RiArrowRightSLine size={34} />
            </Arrow>
          </Details>
        </Product>
        {i !== 2 && <Line />}
      </Wrapper>
    );
  });
};

export default Products;
