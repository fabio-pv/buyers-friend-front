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
import DrawerComponent from "../../Components/DrawerComponent/DrawerComponent";
import SubHeaderComponent from "../../Components/SubHeaderComponent/SubHeaderComponent";
import {ContentMainResponsiveStyled, SpaceResponsiveStyled} from "./styled";
import DBLocalUtil from "../../Utils/DBLocalUtil";
import {SuperContext} from "../../Contexts/SuperContext";
import Test1 from "../../Test1";

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
    static contextType = SuperContext;
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
                body: 'Produto foi adicionado a venda',
            })
        });
    }

    removeProduct = (product) => {

        const stateAux = this.state;

        stateAux.dataSave.sale_details.itens = this.state.dataSave.sale_details.itens.filter(function (obj) {
            return obj.id !== product.id;
        });

        stateAux.dataSave.sale_details.total_amount_in_cents -= product.amount_in_cents;

        this.setState({
            dataSave: this.state.dataSave,
            messagens: MessageUtil.make({
                title: 'Removido',
                body: 'Produto foi removido da venda',
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

    setMessage = (message) => {
        console.log(message);
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

            const dbLocalUtil = DBLocalUtil.getConnection();

            const sales = await (await dbLocalUtil).getAll(DBLocalUtil.SALE_HISTOREY_KEY);

            const stateAux = this.state;

            stateAux.dataSave.id = (sales.length + 1);

            stateAux.dataSave.payment_details.card_number = this.dataFromPayment.state.card_number.replace(/\d{4}(?= \d{4})/g, "****");
            stateAux.dataSave.payment_details.card_holder = this.dataFromPayment.state.card_holder;

            stateAux.dataSave.client_details.name = this.dataFromClient.state.name;
            stateAux.dataSave.client_details.document = this.dataFromClient.state.document;

            stateAux.dataSave.sale_details.subsidiary = this.dataFromSale.state.subsidiary.name;
            stateAux.dataSave.sale_details.payment_method = this.dataFromSale.state.payment_method.name;
            stateAux.dataSave.sale_details.date_sale = moment().format('YYYY-MM-DD HH:mm:ss');

            (await dbLocalUtil).add(
                DBLocalUtil.SALE_HISTOREY_KEY,
                stateAux.dataSave
            );

            this.setState({
                inLoad: false,
                messagens: MessageUtil.make({
                    title: 'Sucesso',
                    body: 'Sua venda foi finalizada',
                    okBtnToRoute: SaleHistoryScreen.ROUTE,
                }),
            });

        } catch (e) {
            console.log(e);
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
                removeProduct: this.removeProduct,
                dataSave: this.state.dataSave,
                finishSale: this.finishSale,
                setDataFromPayment: this.setDataFromPayment,
                setDataFromClient: this.setDataFromClient,
                setDataFromSale: this.setDataFromSale,
                stateParent: this,
            }}>
                <HeaderComponent title={'Fazer uma venda'}
                                 messagens={this.state?.messagens}
                                 inLoad={this.state.inLoad}/>
                <ContentMainResponsiveStyled>
                    <DrawerComponent menuSaleSelect={true}/>
                    <Box width={'90%'}>
                        <SubHeaderComponent title={'Fazer uma venda'}/>
                        <SpaceResponsiveStyled/>
                        <Grid container={true}
                              spacing={3}>
                            <ContentPaymentSale/>
                            <ContentProductSale/>
                            <ContentClientSale/>
                            <ContentSaleSale/>
                        </Grid>
                    </Box>
                </ContentMainResponsiveStyled>
                <Test1/>
            </SaleContext.Provider>
        );
    }
}

export default SaleScreen;