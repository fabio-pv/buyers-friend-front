import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";

class ContentClientSale extends Component {
    render() {
        return (
            <CardComponent desktop={3}
                           mobile={12}
                           title={'Dados do Cliente'}>
                <h5>Dados do Cliente</h5>
            </CardComponent>
        );
    }
}

export default ContentClientSale;