import React, {Component} from 'react';
import CardComponent from "../../Components/CardComponent/CardComponent";

class ContentSaleSale extends Component {
    render() {
        return (
            <CardComponent desktop={9}
                           mobile={12}
                           title={'Dados da venda'}>
                <h5>Dados da venda</h5>
            </CardComponent>
        );
    }
}

export default ContentSaleSale;