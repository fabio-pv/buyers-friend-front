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