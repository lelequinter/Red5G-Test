import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 36px;
`;

export const Welcome = styled.div`
  color: #1058c1;
  height: 24px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  color: #000;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const YourPorducts = styled.div`
  width: 100%;
  height: 56px;
  background-color: #3d88e2;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const WrapperProducts = styled.div`
  margin: 20px 0px;
`;
