import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";
import TextFieldDefaultWithGridComponent
    from "../../Components/TextFieldDefaultWithGridComponent/TextFieldDefaultWithGridComponent";
import {Grid} from "@material-ui/core";

class ContentClientSale extends Component {
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <CardComponent desktop={3}
                           mobile={12}
                           title={'Dados do Cliente'}>
                <Grid container={true}
                      spacing={3}>
                    <TextFieldDefaultWithGridComponent desktop={12}
                                                       mobile={12}
                                                       label={'Nome do cliente'}
                                                       name={'name'}
                                                       type={'text'}
                                                       size={'small'}
                                                       erros={this.props.erros}
                                                       onChange={(event) => this.handleChange(event)}/>
                </Grid>
                <Grid container={true}
                      spacing={3}>
                    <TextFieldDefaultWithGridComponent desktop={12}
                                                       mobile={12}
                                                       label={'Documento do cliente'}
                                                       name={'name'}
                                                       type={'text'}
                                                       size={'small'}
                                                       erros={this.props.erros}
                                                       onChange={(event) => this.handleChange(event)}/>
                </Grid>
            </CardComponent>
        );
    }
}

export default ContentClientSale;