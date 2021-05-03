import React, {Component} from 'react';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import {SaleContext} from "../../Contexts/SaleContext";
import {Box, Grid} from "@material-ui/core";
import ContentPaymentSale from "./ContentPaymentSale";
import ContentProductSale from "./ContentProductSale";
import ContentClientSale from "./ContentClientSale";
import ContentSaleSale from "./ContentSaleSale";
import ProductSaleValidation from "../../FormValidations/ProductSaleValidation";
import PaymentSaleValidation from "../../FormValidations/PaymentSaleValidation";
import ClientSaleValidation from "../../FormValidations/ClientSaleValidation";
import SaleSaleValidation from "../../FormValidations/SaleSaleValidation";
import moment from "moment";
import MessageUtil from "../../Utils/MessageUtil";
import SaleHistoryScreen from "../SaleHistory/SaleHistoryScreen";

const objectModel = {
    id: undefined,
    sale_details: {
        itens: [],
        subsidiary: undefined,
        date_sale: undefined,
        payment_method: undefined,
        total_amount_in_cents: 0
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
    dataFromPayment;
    dataFromClient;
    dataFromSale;

    constructor(props) {
        super(props);

        this.state = {

            inLoad: false,
            dataSave: objectModel,

        };
    }

    addProduct = async (product, productOriginal) => {

        const validate = await ProductSaleValidation.validate(product);
        if (validate !== true) {
            this.setState({
                erros: validate,
            });
            return;
        }

        this.state.dataSave.sale_details.itens.push(product);
        this.state.dataSave.sale_details.total_amount_in_cents += productOriginal.amount_in_cents;

        this.setState({
            dataSave: this.state.dataSave,
            messagens: MessageUtil.make({
                title: 'Sucesso',
                body: 'Produto foi adicionando a venda',
            })
        });
    }

    setDataFromPayment = (state) => {
        this.dataFromPayment = state;
    }

    setDataFromClient = (state) => {
        this.dataFromClient = state;
    }

    setDataFromSale = (state) => {
        this.dataFromSale = state;
    }

    finishSale = async () => {
        try {
            let validate = await PaymentSaleValidation.validate(this.dataFromPayment.state);
            if (validate !== true) {
                this.setState({
                    erros: validate,
                });
                return;
            }

            validate = await ClientSaleValidation.validate(this.dataFromClient.state);
            if (validate !== true) {
                this.setState({
                    erros: validate,
                });
                return;
            }

            validate = await SaleSaleValidation.validate(this.dataFromSale.state);
            if (validate !== true) {
                this.setState({
                    erros: validate,
                });
                return;
            }

            this.state.dataSave.id = 1;

            this.state.dataSave.payment_details.card_number = this.dataFromPayment.state.card_number;
            this.state.dataSave.payment_details.card_holder = this.dataFromPayment.state.card_holder;

            this.state.dataSave.client_details.name = this.dataFromClient.state.name;
            this.state.dataSave.client_details.document = this.dataFromClient.state.document;

            this.state.dataSave.sale_details.subsidiary = this.dataFromSale.state.subsidiary.name;
            this.state.dataSave.sale_details.payment_method = this.dataFromSale.state.name;
            this.state.dataSave.sale_details.date_sale = moment().format('YYYY-MM-DD HH:mm:ss');

            const save = localStorage.getItem('sales');

            let lastDataSave = [];
            if (save !== null) {
                lastDataSave = JSON.parse(save);
            }

            lastDataSave.push(
                this.state.dataSave
            );

            localStorage.setItem('sales', JSON.stringify(lastDataSave));

            window.location.href = SaleHistoryScreen.ROUTE;

        } catch (e) {
            this.setState({
                inLoad: false,
                messagens: MessageUtil.make({
                    title: 'Atenção',
                    body: 'Ocorreu um erro inesperado',
                }),
            });
        }
    }

    render() {
        return (
            <SaleContext.Provider value={{
                erros: this.state.erros,
                addProduct: this.addProduct,
                dataSave: this.state.dataSave,
                finishSale: this.finishSale,
                setDataFromPayment: this.setDataFromPayment,
                setDataFromClient: this.setDataFromClient,
                setDataFromSale: this.setDataFromSale,
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