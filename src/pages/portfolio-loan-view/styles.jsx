import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 28px 20px;
  gap: 15px;
  @media (min-width: 680px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 56px;
  background-color: #3d88e2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 72px;
  z-index: 100;

  p {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    height: 20px;
    font-weight: 600;
  }
`;

export const Button = styled(NavLink)`
  width: 328px;
  height: 48px;
  background-color: #3d88e2;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: absolute;
  bottom: 16px;
`;
