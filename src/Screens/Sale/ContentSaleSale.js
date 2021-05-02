import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";
import {Button, Grid, MenuItem} from "@material-ui/core";
import TextFieldDefaultWithGridComponent
    from "../../Components/TextFieldDefaultWithGridComponent/TextFieldDefaultWithGridComponent";
import PaymentMethodService from "../../Services/PaymentMethodService";
import SpacerComponent from "../../Components/SpacerComponent/SpacerComponent";

class ContentSaleSale extends Component {
    static MAX_PARCELED = 12;

    constructor(props) {
        super(props);

        this.state = {

            paymentMethods: [],

        };

        this.paymentMethod = new PaymentMethodService();
    }

    componentDidMount() {
        this.load();
    }

    async load() {
        try {

            const response = await this.paymentMethod.get();

            this.setState({
                paymentMethods: response.data,
            });

        } catch (e) {
            console.log(e);
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    makeItemPaymentMethods() {
        const itens = [];

        this.state.paymentMethods.map((paymentMethod) => {
            itens.push(
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

    render() {
        return (
            <CardComponent desktop={9}
                           mobile={12}
                           title={'Dados da venda'}>
                <Grid container={true}
                      spacing={3}>
                    <Grid item={true}
                          xs={12}
                          sm={4}>
                        <TextFieldDefaultWithGridComponent desktop={12}
                                                           mobile={12}
                                                           label={'Resumo pedido'}
                                                           name={'name'}
                                                           type={'text'}
                                                           size={'small'}
                                                           multiline={true}
                                                           rows={4}
                                                           erros={this.props.erros}
                                                           onChange={(event) => this.handleChange(event)}/>
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
                                                           erros={this.props.erros}
                                                           onChange={(event) => this.handleChange(event)}/>
                        <Grid container={true}
                              xs={12}
                              sm={12}>
                            <TextFieldDefaultWithGridComponent desktop={8}
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
                                                           label={'Nome do cliente'}
                                                           name={'name'}
                                                           type={'text'}
                                                           size={'small'}
                                                           erros={this.props.erros}
                                                           onChange={(event) => this.handleChange(event)}/>
                        <Button variant={'contained'}>
                            Finalizar Venda
                        </Button>
                    </Grid>
                </Grid>
            </CardComponent>
        );
    }
}

export default ContentSaleSale;