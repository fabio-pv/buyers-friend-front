import React, {Component} from 'react';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import {SaleHistoryContext} from "../../Contexts/SaleHistoryContext";
import FilterSaleHistory from "./FilterSaleHistory";
import {Box} from "@material-ui/core";
import TableSaleHistory from "./TableSaleHistory";
import SpacerComponent from "../../Components/SpacerComponent/SpacerComponent";
import DrawerComponent from "../../Components/DrawerComponent/DrawerComponent";
import SubHeaderComponent from "../../Components/SubHeaderComponent/SubHeaderComponent";
import {ContentMainResponsiveStyled, SpaceResponsiveStyled} from "./styled";

class SaleHistoryScreen extends Component {
    static ROUTE = '/sale-history';

    constructor(props) {
        super(props);

        this.state = {
            inLoad: false
        };
    }

    render() {
        return (
            <SaleHistoryContext.Provider value={{
                stateParent: this,
            }}>
                <HeaderComponent title={'Historico de vendas'}
                                 messagens={this.state?.messagens}
                                 inLoad={this.state.inLoad}/>
                <ContentMainResponsiveStyled>
                    <DrawerComponent menuHistorySelect={true}/>
                    <Box width={'90%'}>
                        <SubHeaderComponent title={'Histórico de vendas'}/>
                        <SpaceResponsiveStyled/>
                        <FilterSaleHistory/>
                        <SpacerComponent height={20}/>
                        <TableSaleHistory/>
                    </Box>
                </ContentMainResponsiveStyled>
            </SaleHistoryContext.Provider>
        );
    }
}

export default SaleHistoryScreen;