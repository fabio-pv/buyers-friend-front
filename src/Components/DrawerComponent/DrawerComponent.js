import React, {Component} from 'react';
import {Box, Hidden, Typography} from "@material-ui/core";
import {ContentMenuItemStyled, DrawerStyled} from "./styled";
import {ReactComponent as SaleIcon} from "../../Assets/sale.svg";
import {ReactComponent as ReportIcon} from "../../Assets/report.svg";
import SpacerComponent from "../SpacerComponent/SpacerComponent";
import SaleScreen from "../../Screens/Sale/SaleScreen";
import SaleHistoryScreen from "../../Screens/SaleHistory/SaleHistoryScreen";

class DrawerComponent extends Component {
    toScreen(route) {
        window.location.href = route;
    }

    render() {
        return (
            <Hidden xsDown={true}>
                <Box width={'9%'}>
                    <DrawerStyled>
                        <ContentMenuItemStyled onClick={() => this.toScreen(SaleScreen.ROUTE)}
                                               current={this.props.menuSaleSelect}>
                            <SaleIcon/>
                            <Typography variant={'h6'}>
                                Fazer uma Venda
                            </Typography>
                        </ContentMenuItemStyled>
                        <SpacerComponent height={40}/>
                        <ContentMenuItemStyled onClick={() => this.toScreen(SaleHistoryScreen.ROUTE)}
                                               current={this.props.menuHistorySelect}>
                            <ReportIcon/>
                            <Typography variant={'h6'}>
                                Histórico de Vendas
                            </Typography>
                        </ContentMenuItemStyled>
                    </DrawerStyled>
                </Box>
            </Hidden>
        );
    }
}

export default DrawerComponent;