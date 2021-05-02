import React, {Component} from 'react';
import SpacerComponent from "../SpacerComponent/SpacerComponent";
import {Box, Typography} from "@material-ui/core";
import {ReactComponent as VisaLogo} from "../../Assets/visa-color_large.svg";
import {ReactComponent as MastercardLogo} from "../../Assets/mastercard-color_large.svg";
import {ReactComponent as AmericanLogo} from "../../Assets/americanexpress-color-large.svg";

class FlagsCardComponent extends Component {
    render() {
        return (
            <div>
                <SpacerComponent height={10}/>
                <Typography variant={'body1'}>
                    Bandeiras aceitas
                </Typography>
                <Box flexDirection={'row'}
                     justifyContent={'flex-start'}
                     alignItems={'center'}>
                    <VisaLogo style={{marginRight: 10}}/>
                    <MastercardLogo style={{marginRight: 10}}/>
                    <AmericanLogo/>
                </Box>
            </div>
        );
    }
}

export default FlagsCardComponent;