import React, {Component} from 'react';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import {SaleContext} from "../../Contexts/SaleContext";
import {Box, Grid} from "@material-ui/core";
import ContentPaymentSale from "./ContentPaymentSale";
import ContentProductSale from "./ContentProductSale";
import ContentClientSale from "./ContentClientSale";
import ContentSaleSale from "./ContentSaleSale";
import ProductSaleValidation from "../../FormValidations/ProductSaleValidation";

const objectModel = {
    id: undefined,
    sale_details: {
        itens: [],
        subsidiary: undefined,
        date_sale: undefined,
        payment_method: undefined,
        total_amount_in_cents: undefined
    },
    client_details: {
        name: undefined,
        document: undefined
    },
    payment_details: {
        card_number: undefined,
        card_holder: undefined,
    }
};

class SaleScreen extends Component {
    static ROUTE = '/';

    constructor(props) {
        super(props);

        this.state = {

            inLoad: false,
            dataSave: objectModel,

        };
    }

    addProduct = async (product) => {

        const validate = await ProductSaleValidation.validate(product);
        if (validate !== true) {
            this.setState({
                erros: validate,
            });
            return;
        }

        this.state.dataSave.sale_details.itens.push(product);

        this.setState({
            dataSave: this.state.dataSave,
        });
    }

    finishSale = async () => {

        console.log('finishSale');

    }

    render() {
        return (
            <SaleContext.Provider value={{
                erros: this.state.erros,
                addProduct: this.addProduct,
                dataSave: this.state.dataSave,
                finishSale: this.finishSale,
            }}>
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