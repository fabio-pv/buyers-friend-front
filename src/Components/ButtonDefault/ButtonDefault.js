import React, {Component} from 'react';
import {ButtonDefaultStyled} from "./styled";

class ButtonDefault extends Component {
    render() {
        return (
            <ButtonDefaultStyled variant={'contained'}
                    color={'primary'}
                    onClick={this.props.onClick}>
                Adicionar produto
            </ButtonDefaultStyled>
        );
    }
}

export default ButtonDefault;