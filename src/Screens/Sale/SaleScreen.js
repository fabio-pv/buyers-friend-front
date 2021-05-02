import React, {Component} from 'react';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import {SaleContext} from "../../Contexts/SaleContext";
import {Box, Grid} from "@material-ui/core";
import ContentPaymentSale from "./ContentPaymentSale";
import ContentProductSale from "./ContentProductSale";
import ContentClientSale from "./ContentClientSale";
import ContentSaleSale from "./ContentSaleSale";
import ProductSaleValidation from "../../FormValidations/ProductSaleValidation";

const objectModel = {{
    "id": 1,
        "sale_details": {
        "itens": [
            {
                "id": "0001",
                "name": "COMPUTADOR RAZOR"
            },
            {
                "id": "0002",
                "name": "LIVRO DO BATMAN"
            }
        ],
            "subsidiary": "PORTO ALEGRE"
        "date_sale": "2021-04-01 11:10:20"
        "payment_method": "PAGAMENTO PARCELADO"
        "total_amount_in_cents": 560000
    }
    "client_details": {
        "name": "Carlos Pedro de Silva",
            "document": "59778114030"
    }
    "payment_details": {
        "card_number": "5193********7440",
            "card_holder": "Carlos Pedro de Silva",
    }
};

class SaleScreen extends Component {
    static ROUTE = '/';

    constructor(props) {
        super(props);

        this.state = {

            inLoad: false,

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

        console.log(product);

    }

    render() {
        return (
            <SaleContext.Provider value={{
                erros: this.state.erros,
                addProduct: this.addProduct,
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