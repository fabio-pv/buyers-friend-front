import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";
import TextFieldDefaultWithGridComponent
    from "../../Components/TextFieldDefaultWithGridComponent/TextFieldDefaultWithGridComponent";
import {Grid} from "@material-ui/core";
import {SaleContext} from "../../Contexts/SaleContext";
import FormMask from "../../FromMask/FormMask";

class ContentClientSale extends Component {
    static contextType = SaleContext;

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.context.setDataFromClient(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <CardComponent desktop={3}
                           mobile={12}
                           title={'Dados do Cliente'}
                           height={245}>
                <Grid container={true}
                      spacing={3}>
                    <TextFieldDefaultWithGridComponent desktop={12}
                                                       mobile={12}
                                                       label={'Nome do cliente'}
                                                       name={'name'}
                                                       type={'text'}
                                                       size={'small'}
                                                       erros={this.context.erros}
                                                       onChange={(event) => this.handleChange(event)}/>
                </Grid>
                <Grid container={true}
                      spacing={3}>
                    <TextFieldDefaultWithGridComponent desktop={12}
                                                       mobile={12}
                                                       label={'Documento do cliente'}
                                                       name={'document'}
                                                       type={'text'}
                                                       size={'small'}
                                                       mask={FormMask.cnpj}
                                                       erros={this.context.erros}
                                                       onChange={(event) => this.handleChange(event)}/>
                </Grid>
            </CardComponent>
        );
    }
}

export default ContentClientSale;