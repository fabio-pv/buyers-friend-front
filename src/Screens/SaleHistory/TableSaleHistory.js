import React, {Component} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import moment from "moment";
import DateUtil from "../../Utils/DateUtil";

class TableSaleHistory extends Component {

    makeRows() {

        let sales = localStorage.getItem('sales');
        sales = JSON.parse(sales);

        const itens = [];

        sales.map((sale) => {

            itens.push(
                <TableRow key={sale.id}>
                    <TableCell>{DateUtil.raw(sale.sale_details.date_sale).toDateTime()}</TableCell>
                    <TableCell>R$ {sale.sale_details.total_amount_in_cents}</TableCell>
                    <TableCell>{sale.client_details.name}</TableCell>
                    <TableCell>{sale.client_details.document}</TableCell>
                    <TableCell>{sale.sale_details.payment_method}</TableCell>
                    <TableCell>{sale.sale_details.subsidiary}</TableCell>
                </TableRow>
            );

        })

        return itens;
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>DATA DA VENDA</TableCell>
                            <TableCell>VALOR</TableCell>
                            <TableCell>NOME CLIENTE</TableCell>
                            <TableCell>DOCUMENTO DO CLIENTE</TableCell>
                            <TableCell>MÉTODO DE PAGAMENTO</TableCell>
                            <TableCell>FILIAL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.makeRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default TableSaleHistory;