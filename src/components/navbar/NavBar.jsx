import React from "react";
import Logo from "../../assets/Logo";
// import { NavLink } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Wrapper, SLink } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  // Este Pathname lo uso para saber si estoy en la pantalla de inicio y de
  // ser así no se muestra la flecha de retorno de lo contrario si se muestra
  const { pathname } = useLocation();
  // Esta variable history la uso para el boton de retorno la aplico en el
  // Onclick de la siguiente manera history(-1)
  const history = useNavigate();
  return (
    <Wrapper>
      {/* Aquí aplico pathname con un ternario y así mostrar o no el boton de retorno */}
      {pathname === "/" ? (
        <div style={{ width: "48px" }} />
      ) : (
        <SLink onClick={() => history(-1)}>
          <RiArrowLeftSLine size={30.59} style={{ color: "#3D88E2" }} />
        </SLink>
      )}
      <Logo />
      <AiOutlinePoweroff size={30.59} style={{ color: "#3D88E2" }} />
    </Wrapper>
  );
};

export default NavBar;
