import React, {Component} from 'react';
import {SpacerStyled} from "./styled";

class SpacerComponent extends Component {
    render() {
        return (
            <SpacerStyled width={this.props.width}
                          height={this.props.height}/>
        );
    }
}

export default SpacerComponent;