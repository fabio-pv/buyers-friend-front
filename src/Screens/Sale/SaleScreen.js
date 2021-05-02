import React, {Component} from 'react';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import {SaleContext} from "../../Contexts/SaleContext";
import {Box, Grid} from "@material-ui/core";
import CardComponent from "../../Components/CardComponent/CardComponent";
import {ContentMainStyled} from "./styled";
import ContentPaymentSale from "./ContentPaymentSale";
import ContentProductSale from "./ContentProductSale";
import ContentClientSale from "./ContentClientSale";
import ContentSaleSale from "./ContentSaleSale";

class SaleScreen extends Component {
    static ROUTE = '/';

    constructor(props) {
        super(props);

        this.state = {

            inLoad: false,

        };
    }

    render() {
        return (
            <SaleContext.Provider value={{}}>
                <HeaderComponent title={'Fazer uma venda'}
                                 messagens={this.state?.messagens}
                                 inLoad={this.state.inLoad}/>
                <Box display={'flex'}
                     justifyContent={'center'}
                     alignItems={'center'}>
                    <Box width={'90%'}>
                        <Grid container={true}
                              spacing={3}>
                            <ContentPaymentSale/>
                            <ContentProductSale/>
                            <ContentClientSale/>
                            <ContentSaleSale/>
                        </Grid>
                    </Box>
                </Box>
            </SaleContext.Provider>
        );
    }
}

export default SaleScreen;