import React, {Component} from 'react';
import {Hidden, Paper, Typography} from "@material-ui/core";
import {SubHeaderStyled} from "./styled";

class SubHeaderComponent extends Component {
    render() {
        return (
            <Hidden xsDown={true}>
                <SubHeaderStyled elevation={1}>
                    <Typography variant={'h6'}>
                        Fazer uma venda
                    </Typography>
                </SubHeaderStyled>
            </Hidden>
        );
    }
}

export default SubHeaderComponent;