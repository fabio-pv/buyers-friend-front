import styled from "styled-components";
import {Grid, Paper} from "@material-ui/core";

export const GridStyled = styled(Grid)`
  width: 100% !important;
`;

export const ContentTitleStyled = styled.div`
  background: ${'#' + process.env.REACT_APP_SECONDARY_COLOR};
  position: relative;
  color: white;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ContentBodyStyled = styled.div`
  position: relative;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const PaperStyled = styled(Paper)`
  height: ${props => props.height ? props.height + 'px' : 'auto'};
`;