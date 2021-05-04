import styled from "styled-components";
import {Button, IconButton, TableCell, TableHead, TableRow} from "@material-ui/core";

export const ButtonFilterStyled = styled(Button)`
  background: #97979A;
  color: white;
`;

export const ButtonFilterIconStyled = styled(IconButton)`
  background: #97979A;
  color: white;
  height: 36px;
  width: 36px;
  border-radius: 5px;
`;

export const TableHeaderStyled = styled(TableHead)`
  background: ${'#' + process.env.REACT_APP_SECONDARY_COLOR};
  height: 50px;
  border-radius: 10px;
`;

export const TableCellStyled = styled(TableCell)`
  color: white;
  height: 50px;
`;

export const TableRowStyled = styled(TableRow)`
  color: white;
  height: 70px;
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

export const ContentEmptyTableSaleHistoryStyled = styled.div`
  margin-top: 150px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 90px;
    color: rgba(128, 128, 128, 0.69);
  }
  
  h6 {
    font-weight: bold;
    color: rgba(128, 128, 128, 0.69);
  }
`;