import React, {Component} from 'react';
import TextFieldDefault from "../TextFieldDefaultComponent/TextFieldDefault";
import {Grid, Typography} from "@material-ui/core";

class TextFieldDefaultWithGridComponent extends Component {
    render() {
        return (
            <Grid item={true}
                  xs={this.props.mobile}
                  sm={this.props.desktop}>
                <Typography variant={'body1'}>{this.props.label}</Typography>
                <TextFieldDefault {...this.props}/>
            </Grid>
        );
    }
}

export default TextFieldDefaultWithGridComponent;