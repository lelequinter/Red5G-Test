import React from "react";
import Logo from "../../assets/Logo";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Wrapper } from "./Styles";

const NavBar = () => {
  return (
    <Wrapper>
      <div/>
      <Logo />
      <AiOutlinePoweroff size={30.59} style={{color: "#3D88E2"}}/>
    </Wrapper>
  );
};

export default NavBar;
