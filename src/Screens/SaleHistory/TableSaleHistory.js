import React, {Component} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import DateUtil from "../../Utils/DateUtil";
import {TableCellStyled, TableHeaderStyled, TableRowStyled} from "./styled";
import DBLocalUtil from "../../Utils/DBLocalUtil";
import {SaleHistoryContext} from "../../Contexts/SaleHistoryContext";
import MoneyFormatterUtil from "../../Utils/MoneyFormatterUtil";
import EmptyTableSaleHistory from "./EmptyTableSaleHistory";

class TableSaleHistory extends Component {
    static contextType = SaleHistoryContext;

    constructor(props) {
        super(props);

        this.state = {
            sales: [],
        };
    }

    componentDidMount() {
        this.load();
    }

    async load() {
        try {

            const connection = DBLocalUtil.getConnection();

            const sales = await (await connection).getAll(DBLocalUtil.SALE_HISTOREY_KEY);

            this.setState({
                sales: sales,
            });

        } catch (e) {
        }
    }

    makeRows = () => {
        try {

            const itens = [];

            this.state.sales.map((sale) => {

                return itens.push(
                    <TableRowStyled key={sale.id}>
                        <TableCell>{DateUtil.raw(sale.sale_details.date_sale).toHumanTime()}</TableCell>
                        <TableCell>{MoneyFormatterUtil.brl(sale.sale_details.total_amount_in_cents / 100)}</TableCell>
                        <TableCell>{sale.client_details.name}</TableCell>
                        <TableCell>{sale.client_details.document}</TableCell>
                        <TableCell>{sale.sale_details.payment_method}</TableCell>
                        <TableCell>{sale.sale_details.subsidiary}</TableCell>
                    </TableRowStyled>
                );

            })

            return itens;

        } catch (e) {
            return [];
        }
    }

    render() {

        if (this.state.sales.length <= 0) {
            return (
                <EmptyTableSaleHistory/>
            );
        }

        return (
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHeaderStyled>
                        <TableRow>
                            <TableCellStyled>DATA DA VENDA</TableCellStyled>
                            <TableCellStyled>VALOR</TableCellStyled>
                            <TableCellStyled>NOME CLIENTE</TableCellStyled>
                            <TableCellStyled>DOCUMENTO DO CLIENTE</TableCellStyled>
                            <TableCellStyled>MÉTODO DE PAGAMENTO</TableCellStyled>
                            <TableCellStyled>FILIAL</TableCellStyled>
                        </TableRow>
                    </TableHeaderStyled>
                    <TableBody>
                        {this.makeRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default TableSaleHistory;