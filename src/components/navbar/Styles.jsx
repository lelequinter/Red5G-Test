import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: auto;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 12px 0 12px;
  position: sticky;
  top: 0px;
  background-color: #fff;
  z-index: 200;

  svg {
    height: 30.59px;
  }
`;

export const SLink = styled(NavLink)`
  margin: 0;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
