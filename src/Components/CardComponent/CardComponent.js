import React, {Component} from 'react';
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {ContentBodyStyled, ContentTitle, ContentTitleStyled, GridStyled, PaperStyled} from "./styled";

class CardComponent extends Component {
    render() {
        return (
            <GridStyled item={true}
                  xs={this.props.mobile}
                  sm={this.props.desktop}>
                <Paper elevation={1}>
                    <ContentTitleStyled>
                        <Typography variant={'subtitle1'}>
                            {this.props.title}
                        </Typography>
                    </ContentTitleStyled>
                    <ContentBodyStyled>
                        {this.props.children}
                    </ContentBodyStyled>
                </Paper>
            </GridStyled>
        );
    }
}

export default CardComponent;