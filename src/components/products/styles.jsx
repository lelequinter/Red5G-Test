import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
`;

export const Product = styled.div`
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  width: 328px;
`;

export const Logo = styled.div`
  background-color: #3d88e2;
  height: 104px;
  width: 104px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #fff;
  }
`;

export const Details = styled.div`
  height: 104px;
  width: 224px;
  margin-left: 16px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-top: 20px;
  gap: 4px;
  position: relative;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 800;
  color: #000;
  margin: 0;
`;
export const Type = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #3d88e2;
  margin: 4px 0 0 0;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #1058c1;
  margin: 4px 0 0 0;

  span {
    font-size: 12px;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  svg {
    color: #3d88e2;
  }
`;

export const Line = styled.hr`
  border: 1px solid #add2ff;
  margin: 16px 0;
`;
