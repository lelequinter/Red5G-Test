import React from "react";
import Logo from "../../assets/Logo";
// import { NavLink } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Wrapper, SLink } from "./Styles";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      {pathname === "/" ? (
        <div style={{ width: "48px" }} />
      ) : (
        <SLink to={"../"}>
          <RiArrowLeftSLine size={30.59} style={{ color: "#3D88E2" }} />
        </SLink>
      )}
      <Logo />
      <AiOutlinePoweroff size={30.59} style={{ color: "#3D88E2" }} />
    </Wrapper>
  );
};

export default NavBar;
