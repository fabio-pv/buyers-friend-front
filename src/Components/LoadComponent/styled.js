import styled from 'styled-components';
import {Typography, CircularProgress} from "@material-ui/core";

export const ContentMainLoadStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #3a3a3abd;
  z-index: 99;
`;

export const TextLoadStyled = styled(Typography)`
  color: white;
`;

export const LoadStyled = styled(CircularProgress)`
  color: white !important;
`;