import React, {Component} from 'react';
import {SuperContext} from "./Contexts/SuperContext";
import {SaleContext} from "./Contexts/SaleContext";
import Test2 from "./Test2";

class Test1 extends Component {

    render() {
        return (
            <SuperContext.Consumer>
                {superContext => (
                    <SaleContext.Consumer>
                        {saleContext => (
                            <>
                                <Test2 superContext={superContext}
                                       saleContext={saleContext}/>
                                <button onClick={() => superContext.superState.setState({
                                    inLoad: true,
                                })}> outro teste
                                </button>
                            </>
                        )}
                    </SaleContext.Consumer>
                )}
            </SuperContext.Consumer>
        );
    }

}

export default Test1;