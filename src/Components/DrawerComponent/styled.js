import styled from "styled-components";

export const DrawerStyled = styled.div`
  background: ${'#' + process.env.REACT_APP_SECONDARY_COLOR};
  width: 72px;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  z-index: 999;
  transition: width 0.5s, visibility 1.0s;
  
  &:hover {
    width: 300px !important;

    h6 {
      display: flex !important;
    }
  }

  h6 {
    display: none;
  }


`;

export const ContentMenuItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  h6 {
    margin-left: 10px;
    font-weight: ${props => props.current ? 'bold' : undefined};
  }
`;