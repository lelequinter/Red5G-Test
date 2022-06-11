import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
`;

export const Transaction = styled.div`
  width: 328px;
  height: 96px;
  border-left: 8px solid #3d88e2;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #000;
  margin: 4px 0 0 16px;

  span {
    font-size: 12px;
  }
`;

export const Type = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #3d88e2;
  margin: 4px 0 0 16px;
`;

export const Date = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #012754;
  margin: 4px 0 0 16px;
`;

export const Line = styled.hr`
  border: 1px solid #add2ff;
  margin: 16px 0;
  width: 100%;
`;
