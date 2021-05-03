import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";
import {Box, Grid, Typography} from "@material-ui/core";
import TextFieldDefaultWithGridComponent
    from "../../Components/TextFieldDefaultWithGridComponent/TextFieldDefaultWithGridComponent";
import SpacerComponent from "../../Components/SpacerComponent/SpacerComponent";
import {ReactComponent as VisaLogo} from "../../Assets/visa-color_large.svg";
import {ReactComponent as AmericanLogo} from "../../Assets/americanexpress-color-large.svg";
import {ReactComponent as MastercardLogo} from "../../Assets/mastercard-color_large.svg";
import FlagsCardComponent from "../../Components/FlagsCardComponent/FlagsCardComponent";
import CardSimulationComponent from "../../Components/CardSimulationComponent/CardSimulationComponent";
import {SaleContext} from "../../Contexts/SaleContext";
import FormMask from "../../FromMask/FormMask";

class ContentPaymentSale extends Component {
    static contextType = SaleContext;

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.context.setDataFromPayment(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <CardComponent desktop={7}
                           mobile={12}
                           title={'Dados da forma de pagamento'}
                           height={310}>
                <Grid container={true}
                      spacing={3}>
                    <Grid item={true}
                          xs={12}
                          sm={7}>
                        <Grid container={true}
                              spacing={3}>
                            <TextFieldDefaultWithGridComponent desktop={7}
                                                               mobile={12}
                                                               label={'Número do cartão'}
                                                               name={'card_number'}
                                                               type={'text'}
                                                               size={'small'}
                                                               mask={FormMask.cardNumber}
                                                               erros={this.context.erros}
                                                               onChange={(event) => this.handleChange(event)}/>
                            <TextFieldDefaultWithGridComponent desktop={5}
                                                               mobile={12}
                                                               label={'Data de expiração'}
                                                               name={'expiration_date'}
                                                               type={'text'}
                                                               size={'small'}
                                                               mask={FormMask.dateCard}
                                                               erros={this.context.erros}
                                                               onChange={(event) => this.handleChange(event)}/>
                        </Grid>
                        <Grid container={true}
                              spacing={3}>
                            <TextFieldDefaultWithGridComponent desktop={7}
                                                               mobile={12}
                                                               label={'Titular do cartão'}
                                                               name={'card_holder'}
                                                               type={'text'}
                                                               size={'small'}
                                                               erros={this.context.erros}
                                                               onChange={(event) => this.handleChange(event)}/>
                            <TextFieldDefaultWithGridComponent desktop={5}
                                                               mobile={12}
                                                               label={'CVV'}
                                                               name={'cvv'}
                                                               type={'text'}
                                                               size={'small'}
                                                               mask={FormMask.cardCvv}
                                                               erros={this.context.erros}
                                                               onChange={(event) => this.handleChange(event)}/>
                        </Grid>
                    </Grid>
                    <Grid item={true}
                          spacing={3}
                          xs={12}
                          sm={5}>
                        <SpacerComponent height={25}/>
                        <CardSimulationComponent number={this.state.card_number}
                                                 dateExpired={this.state.expiration_date}
                                                 cvv={this.state.cvv}/>
                    </Grid>
                </Grid>
                <FlagsCardComponent/>
            </CardComponent>
        );
    }
}

export default ContentPaymentSale;