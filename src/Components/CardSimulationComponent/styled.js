import styled from 'styled-components';
import {Typography} from "@material-ui/core";

export const CardSimulationStyled = styled.div`
  width: 100%;
  height: 150px;
  background: ${'#' + process.env.REACT_APP_PRIMARY_COLOR};
  border-radius: 12px;
`;

export const CardSimulationMagneticStyled = styled.div`
  height: 30px;
  background: #E4E4E4;
`;

export const CardSimulationNumberStyled = styled(Typography)`
  color: #FFFFFF;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 30px;
`;

export const CardSimulationLabelStyled = styled(Typography)`
  color: #FFF;
  font-weight: bold;
  margin-left: 20px;
  font-size: 12px;
`;

export const CardSimulationValueStyled = styled(Typography)`
  color: #E2E1E1;
  font-weight: bold;
  margin-left: 5px;
  font-size: 15px;
`;