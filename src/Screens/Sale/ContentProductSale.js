import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";

class ContentProductSale extends Component {
    render() {
        return (
            <CardComponent desktop={4}
                           mobile={12}
                           title={'Produtos'}>
                <h5>Produtos</h5>
            </CardComponent>
        );
    }
}

export default ContentProductSale;