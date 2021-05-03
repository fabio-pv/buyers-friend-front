import styled from "styled-components";

export const ContentMainStyled = styled.div`
  padding-top: 20px;
`;

export const ContentMainResponsiveStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 450px) {
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: 451px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const SpaceResponsiveStyled = styled.div`
  @media (max-width: 450px) {
    height: 30px;
  }

  @media (min-width: 451px) {
    height: 135px;
  }
`;