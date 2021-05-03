import React, {Component} from 'react';
import {Hidden, Paper, Typography} from "@material-ui/core";
import {SubHeaderStyled} from "./styled";

class SubHeaderComponent extends Component {
    render() {
        return (
            <Hidden xsDown={true}>
                <SubHeaderStyled elevation={1}>
                    <Typography variant={'h6'}>
                        {this.props.title}
                    </Typography>
                </SubHeaderStyled>
            </Hidden>
        );
    }
}

export default SubHeaderComponent;