import React, {Component} from 'react';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import {SaleHistoryContext} from "../../Contexts/SaleHistoryContext";
import FilterSaleHistory from "./FilterSaleHistory";
import {Box} from "@material-ui/core";
import TableSaleHistory from "./TableSaleHistory";
import SpacerComponent from "../../Components/SpacerComponent/SpacerComponent";
import DrawerComponent from "../../Components/DrawerComponent/DrawerComponent";
import SubHeaderComponent from "../../Components/SubHeaderComponent/SubHeaderComponent";

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
            <SaleHistoryContext.Provider value={{}}>
                <HeaderComponent title={'Historico de vendas'}
                                 messagens={this.state?.messagens}
                                 inLoad={this.state.inLoad}/>
                <Box display={'flex'}
                     justifyContent={'flex-start'}
                     alignItems={'flex-start'}>
                    <DrawerComponent/>
                    <Box width={'90%'}>
                        <SubHeaderComponent title={'Historico de vendas'}/>
                        <SpacerComponent height={135}/>
                        <FilterSaleHistory/>
                        <SpacerComponent height={20}/>
                        <TableSaleHistory salesHistory={[]}/>
                    </Box>
                </Box>
            </SaleHistoryContext.Provider>
        );
    }
}

export default SaleHistoryScreen;