import styled from "styled-components";

export const DrawerStyled = styled.div`
  background: ${'#' + process.env.REACT_APP_SECONDARY_COLOR};
  width: 72px;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: fixed;
`;