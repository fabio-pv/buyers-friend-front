import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";
import {Button, Grid, MenuItem} from "@material-ui/core";
import TextFieldDefaultWithGridComponent
    from "../../Components/TextFieldDefaultWithGridComponent/TextFieldDefaultWithGridComponent";
import PaymentMethodService from "../../Services/PaymentMethodService";
import SpacerComponent from "../../Components/SpacerComponent/SpacerComponent";
import SubsidiaryService from "../../Services/SubsidiaryService";
import OrderSummaryComponent from "../../Components/OrderSummaryComponent/OrderSummaryComponent";
import {SaleContext} from "../../Contexts/SaleContext";
import MessageUtil from "../../Utils/MessageUtil";

class ContentSaleSale extends Component {
    static contextType = SaleContext;
    static MAX_PARCELED = 12;

    constructor(props) {
        super(props);

        this.state = {

            paymentMethods: [],
            subsidiaries: [],

        };

        this.paymentMethod = new PaymentMethodService();
        this.subsidiaryService = new SubsidiaryService();
    }

    componentDidMount() {
        this.context.setDataFromSale(this);
        this.load();
    }

    async load() {
        try {

            this.context.stateParent.setState({
                inLoad: true,
            });

            const response = await this.paymentMethod.get();
            const responseSubsidiary = await this.subsidiaryService.get();

            this.context.stateParent.setState({
                inLoad: false,
            });

            this.setState({
                paymentMethods: response.data,
                subsidiaries: responseSubsidiary.data,
            });

        } catch (e) {
            this.context.stateParent.setState({
                inLoad: false,
                messagens: MessageUtil.make({
                    title: 'Atenção',
                    body: 'Ocorreu um erro inesperado',
                }),
            });
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    makeItemSubsidiary() {
        const itens = [];

        this.state.subsidiaries.map((subsidiary) => {
            return itens.push(
                <MenuItem key={subsidiary.id}
                          value={subsidiary}>
                    {subsidiary.name}
                </MenuItem>
            );

        });

        return itens;

    }

    makeItemPaymentMethods() {
        const itens = [];

        this.state.paymentMethods.map((paymentMethod) => {
            return itens.push(
                <MenuItem key={paymentMethod.id}
                          value={paymentMethod}>
                    {paymentMethod.name}
                </MenuItem>
            );

        });

        return itens;

    }

    makeItemParceled() {

        const itens = [];

        for (let i = 1; i <= ContentSaleSale.MAX_PARCELED; i++) {
            itens.push(
                <MenuItem key={i}
                          value={i}>
                    {i}x
                </MenuItem>
            );
        }

        return itens;

    }

    doFinishSale = () => {
        this.context.finishSale();
    }

    render() {
        return (
            <CardComponent desktop={9}
                           mobile={12}
                           title={'Dados da venda'}
                           height={245}>
                <Grid container={true}
                      spacing={3}>
                    <Grid item={true}
                          xs={12}
                          sm={4}>
                        <OrderSummaryComponent/>
                    </Grid>
                    <Grid item={true}
                          xs={12}
                          sm={4}>
                        <TextFieldDefaultWithGridComponent desktop={12}
                                                           mobile={12}
                                                           label={'Filial'}
                                                           name={'subsidiary'}
                                                           type={'text'}
                                                           size={'small'}
                                                           select={true}
                                                           erros={this.props.erros}
                                                           onChange={(event) => this.handleChange(event)}>
                            {this.makeItemSubsidiary()}
                        </TextFieldDefaultWithGridComponent>
                        <Grid container={true}
                              xs={12}
                              sm={12}>
                            <TextFieldDefaultWithGridComponent desktop={(this.state?.payment_method?.id === 1 ? 8 : 12)}
                                                               mobile={12}
                                                               label={'Tipo do pagamento'}
                                                               name={'payment_method'}
                                                               type={'text'}
                                                               size={'small'}
                                                               select={true}
                                                               erros={this.props.erros}
                                                               onChange={(event) => this.handleChange(event)}>
                                {this.makeItemPaymentMethods()}
                            </TextFieldDefaultWithGridComponent>
                            {this.state?.payment_method?.id === 1 &&
                            <TextFieldDefaultWithGridComponent desktop={4}
                                                               mobile={12}
                                                               label={'Parcelas'}
                                                               name={'parceled'}
                                                               size={'small'}
                                                               select={true}
                                                               erros={this.props.erros}
                                                               onChange={(event) => this.handleChange(event)}>
                                {this.makeItemParceled()}
                            </TextFieldDefaultWithGridComponent>
                            }
                        </Grid>
                    </Grid>
                    <Grid item={true}
                          xs={12}
                          sm={4}>
                        <TextFieldDefaultWithGridComponent desktop={12}
                                                           mobile={12}
                                                           label={'Valor da venda R$'}
                                                           name={'total_amount_in_cents'}
                                                           type={'text'}
                                                           size={'small'}
                                                           disabled={true}
                                                           value={this.context.dataSave.sale_details.total_amount_in_cents / 100}
                                                           erros={this.props.erros}
                                                           onChange={(event) => this.handleChange(event)}/>
                        <SpacerComponent height={25}/>
                        <Button variant={'contained'}
                                color={'primary'}
                                onClick={this.doFinishSale}>
                            Finalizar Venda
                        </Button>
                    </Grid>
                </Grid>
            </CardComponent>
        );
    }
}

export default ContentSaleSale;