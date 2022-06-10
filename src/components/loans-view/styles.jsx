import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
`;

export const View = styled.div`
  width: 328px;
  height: 88px;
  border-left: 8px solid #3d88e2;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 88px;

  svg {
    color: #3d88e2;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const Value = styled.p`
  font-size: 24px;
  color: #012754;
  height: 24px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #3d88e2;
  height: 20px;
  margin: 0;
`;

export const Date = styled.p`
  font-size: 12px;
  color: #012754;
  height: 20px;
  margin: 0;
`;

export const Line = styled.hr`
  border: 1px solid #add2ff;
  margin: 16px 0;
  width: 100%;
`;
