import React, {Component} from 'react';
import {ContentMainOrderSummaryStyled} from "./styled";
import {Typography} from "@material-ui/core";
import {SaleContext} from "../../Contexts/SaleContext";

class OrderSummaryComponent extends Component {
    static contextType = SaleContext;

    makeItem() {

        const itens = [];

        this.context.dataSave.sale_details.itens.map((product) => {

            return itens.push(
                <Typography variant={'body1'}
                            onDoubleClick={() => this.removeItem(product)}
                            style={{cursor: 'pointer'}}>
                    {product.id} - {product.name}
                </Typography>
            );

        });

        return itens;
    }

    removeItem = (product) => {
        this.context.removeProduct(product);
    }

    render() {
        return (
            <>
                <Typography variant={'body1'}>
                    Resumo do pedido
                </Typography>
                <ContentMainOrderSummaryStyled>
                    {this.makeItem()}
                </ContentMainOrderSummaryStyled>
            </>
        );
    }
}

export default OrderSummaryComponent;