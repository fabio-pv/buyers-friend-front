import React, {Component} from 'react';
import {ContentEmptyTableSaleHistoryStyled} from "./styled";
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import {Typography} from "@material-ui/core";
import SaleScreen from "../Sale/SaleScreen";

class EmptyTableSaleHistory extends Component {
    toSaleScreen() {
        window.location.href = SaleScreen.ROUTE;
    }

    render() {
        return (
            <ContentEmptyTableSaleHistoryStyled>
                <SentimentDissatisfiedIcon fontSize={'large'}/>
                <Typography variant={'h6'}>
                    Você ainda não possui vendas
                </Typography>
                <Typography variant={'subtitle1'}
                            onClick={this.toSaleScreen}
                            style={{cursor: 'pointer'}}>
                    Clique aqui e comece a vender
                </Typography>
            </ContentEmptyTableSaleHistoryStyled>
        );
    }
}

export default EmptyTableSaleHistory;