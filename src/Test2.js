import React, {Component} from 'react';
import MessageUtil from "./Utils/MessageUtil";

class Test2 extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.superContext.superState.setState({
                    theme: 'dark',
                })}>
                    Theme Dark
                </button>
                <button onClick={() => this.props.superContext.superState.setState({
                    theme: 'light',
                })}>
                    Theme Light
                </button>
                <button onClick={() => this.props.superContext.superState.setState({
                    inLoad: true,
                })}>
                    Load
                </button>
                <button onClick={() => this.props.saleContext.stateParent.setState({
                    messagens: MessageUtil.make({
                        title: 'Context Api',
                        body: 'Teste de context api > Redux',
                    }),
                })}>
                    Messagens
                </button>
            </div>
        );
    }
}

export default Test2;