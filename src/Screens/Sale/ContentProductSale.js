import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";
import {Button, Grid, MenuItem} from "@material-ui/core";
import TextFieldDefaultWithGridComponent
    from "../../Components/TextFieldDefaultWithGridComponent/TextFieldDefaultWithGridComponent";
import ProductService from "../../Services/ProductService";
import {SaleContext} from "../../Contexts/SaleContext";

class ContentProductSale extends Component {
    static contextType = SaleContext;

    constructor(props) {
        super(props);

        this.state = {

            products: [],

        };

        this.productService = new ProductService();
    }

    componentDidMount() {
        this.load();
    }

    async load() {
        try {

            const response = await this.productService.get();

            this.setState({
                products: response.data,
            });

        } catch (e) {
            console.log(e);
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});

        if (name === 'name') {
            this.showValueProduct(value);
        }

    }

    showValueProduct(value) {
        this.setState({
            id: value.id,
            value: value.amount_in_cents,
        });
    }

    makeItemProduct() {
        const itens = [];

        this.state.products.map((product) => {
            return itens.push(
                <MenuItem key={product.id}
                          value={product}>
                    {product.product_name}
                </MenuItem>
            );

        });

        return itens;

    }

    addProduct = () => {
        this.context.addProduct({
            id: this.state.id,
            name: this.state.name?.product_name,
        }, this.state.name);
    }

    render() {
        return (
            <CardComponent desktop={5}
                           mobile={12}
                           title={'Produtos'}
                           height={310}>
                <Grid container={true}
                      spacing={3}>
                    <TextFieldDefaultWithGridComponent desktop={5}
                                                       mobile={12}
                                                       label={'Código do produto'}
                                                       name={'id'}
                                                       type={'number'}
                                                       size={'small'}
                                                       disabled={true}
                                                       value={this.state.id}
                                                       erros={this.context.erros}
                                                       onChange={(event) => this.handleChange(event)}/>
                </Grid>
                <Grid container={true}
                      spacing={3}>
                    <TextFieldDefaultWithGridComponent desktop={12}
                                                       mobile={12}
                                                       label={'Nome do produto'}
                                                       name={'name'}
                                                       select={true}
                                                       size={'small'}
                                                       value={this.state.name}
                                                       erros={this.context.erros}
                                                       onChange={(event) => this.handleChange(event)}>
                        {this.makeItemProduct()}
                    </TextFieldDefaultWithGridComponent>
                </Grid>
                <Grid container={true}
                      spacing={3}
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-end">
                    <TextFieldDefaultWithGridComponent desktop={6}
                                                       mobile={12}
                                                       label={'Valor do produto'}
                                                       name={'value'}
                                                       type={'text'}
                                                       size={'small'}
                                                       disabled={true}
                                                       value={this.state.value}
                                                       erros={this.context.erros}
                                                       onChange={(event) => this.handleChange(event)}/>
                    <Grid item={true}
                          xs={12}
                          sm={6}>
                        <Button variant={'contained'}
                                color={'primary'}
                                onClick={this.addProduct}>
                            Adicionar produto
                        </Button>
                    </Grid>
                </Grid>
            </CardComponent>
        );
    }
}

export default ContentProductSale;