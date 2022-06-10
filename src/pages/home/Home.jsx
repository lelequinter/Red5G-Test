import React from "react";
import Products from "../../components/products/Products";
import {
  Wrapper,
  WelcomeWrapper,
  Welcome,
  Content,
  YourPorducts,
  WrapperProducts,
} from "./styles";

function Home() {
  return (
    <Wrapper>
      <WelcomeWrapper>
        <Welcome>Welcome</Welcome>
        <Content>Mango Soft Inc.</Content>
      </WelcomeWrapper>
      <YourPorducts>
        <p>Your products</p>
      </YourPorducts>
    <WrapperProducts>
        <Products/>
    </WrapperProducts>
    </Wrapper>
  );
}

export default Home;
