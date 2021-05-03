import React, {Component} from 'react';
import {Box, Hidden} from "@material-ui/core";
import {DrawerStyled} from "./styled";
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
                        <SaleIcon style={{cursor: 'pointer'}}
                                  onClick={() => this.toScreen(SaleScreen.ROUTE)}/>
                        <SpacerComponent height={40}/>
                        <ReportIcon style={{cursor: 'pointer'}}
                                    onClick={() => this.toScreen(SaleHistoryScreen.ROUTE)}/>
                    </DrawerStyled>
                </Box>
            </Hidden>
        );
    }
}

export default DrawerComponent;