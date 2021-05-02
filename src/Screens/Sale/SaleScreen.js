import React, {Component} from 'react';
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";

class SaleScreen extends Component {
    static ROUTE = '/';

    constructor(props) {
        super(props);

        this.state = {

            inLoad: false,

        };
    }

    render() {
        return (
            <>
                <HeaderComponent title={'Fazer uma venda'}
                                 messagens={this.state?.messagens}
                                 inLoad={this.state.inLoad}/>
            </>
        );
    }
}

export default SaleScreen;