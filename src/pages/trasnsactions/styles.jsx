import styled from "styled-components";

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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 20px 28px 20px;
`;

export const PickerWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 16px;
  position: sticky;
  top: 128px;
  z-index: 100;
`;

export const CustomPicker = styled.div`
  width: 328px;
  height: 56px;
  border-bottom: 2px solid #3d88e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 0;
  font-size: 18px;
  color: #3d88e2;
`;
