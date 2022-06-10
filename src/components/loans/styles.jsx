import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
`;

export const Loan = styled.div`
  width: 320px;
  height: 132px;
  border-left: 8px solid #3d88e2;
  position: relative;
`;

export const Title = styled.div`
  margin: 16px 16px 8px 24px;
  font-size: 20px;
  height: 20px;
  font-weight: 800;
  font-family: TTCommonsDemiBold;
  color: #012754;
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 24px;
  gap: 6px;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  width: 132px;

  p {
    font-size: 12px;
    height: 12px;
    margin: 0;
    color: #3d88e2;
  }

  span {
    font-size: 16px;
    height: 12px;
  }
`;

export const IconsSection = styled.div`
  display: flex;
  position: absolute;
  bottom: 8px;
  right: 12px;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #3d88e2;
  }
`;

export const Line = styled.hr`
  border: 1px solid #add2ff;
  margin: 16px 0;
  width: 100%;
`;
