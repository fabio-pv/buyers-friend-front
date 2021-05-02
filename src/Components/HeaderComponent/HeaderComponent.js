import React, {Component} from 'react';
import DialogComponent from "../DialogComponent/DialogComponent";
import LoadComponent from "../LoadComponent/LoadComponent";
import {Helmet} from "react-helmet";
import {ContentHeader, LogoHeaderStyled} from "./styled";
import {AppBar, Box, Toolbar} from "@material-ui/core";
import {ReactComponent as Logo} from "../../Assets/logo.svg";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <LoadComponent inLoad={this.props.inLoad ?? false}/>
                <Helmet>
                    <title>{this.props.title ?? '??'}</title>
                </Helmet>
                <ContentHeader>
                    <AppBar elevation={0}>
                        <Toolbar>
                            <Box display={'flex'}
                                 flexDirection={'row'}
                                 width={'100%'}>
                                <Box display={'flex'}
                                     alignItems="center"
                                     justifyContent="flex-start"
                                     flexGrow={1}>
                                    <Logo/>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </ContentHeader>
                {this.props.messagens !== null &&
                <DialogComponent messagens={this.props.messagens ?? null}/>
                }
            </div>
        );
    }
}

export default HeaderComponent;