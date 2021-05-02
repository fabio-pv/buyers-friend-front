import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";

class ContentPaymentSale extends Component {
    render() {
        return (
            <CardComponent desktop={8}
                           mobile={12}
                           title={'Dados da forma de pagamento'}>
                <h5>Dados da forma de pagamento</h5>
            </CardComponent>
        );
    }
}

export default ContentPaymentSale;