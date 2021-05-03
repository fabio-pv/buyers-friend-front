import React, {Component} from 'react';
import {IconButton, InputAdornment} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {TextFieldDefaultStyled} from "./styled";


class TextFieldDefault extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
        };
    }

    tryGetErro() {
        try {

            return this.props.erros[this.props.name];

        } catch (e) {
            return undefined;
        }
    }

    isErro() {
        try {

            const value = this.props.erros[this.props.name];

            if (value !== undefined) {
                return true;
            }

        } catch (e) {
            return undefined;
        }
    }

    getPasswordVisibility() {

        if (this.props.type !== 'password') {
            return undefined;
        }

        return (
            <InputAdornment position={'end'}>
                <IconButton onClick={this.showPassword}>
                    {!this.state.showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                </IconButton>
            </InputAdornment>
        );
    }

    showPassword = () => {

        this.setState({
            showPassword: !this.state.showPassword,
        });

    }

    getType() {
        if (this.props.type === 'password' && this.state.showPassword) {
            return 'text';
        }

        return this.props.type;
    }

    render() {
        return (
            <TextFieldDefaultStyled variant={'outlined'}
                                    fullWidth={(this.props.fullWidth ?? true)}
                                    select={this.props.select}
                                    margin={'normal'}
                                    onChange={this.props.onChange}
                                    name={this.props.name}
                                    inputProps={this.props.inputProps}
                                    type={this.getType()}
                                    multiline={this.props.multiline}
                                    rows={this.props.rows}
                                    value={this.props.value}
                                    defaultValue={this.props.defaultValue}
                                    disabled={this.props.disabled}
                                    error={this.isErro()}
                                    helperText={this.tryGetErro()}
                                    size={this.props.size}
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    InputProps={{
                                        inputComponent: this.props.mask,
                                        endAdornment: this.getPasswordVisibility(),
                                    }}>
                {this.props.children}
            </TextFieldDefaultStyled>
        );
    }
}

export default TextFieldDefault;