import React, {Component} from 'react';
import {
    CardSimulationBirdLabelStyled,
    CardSimulationExpiredLabelStyled,
    CardSimulationExpiredValueStyled,
    CardSimulationLabelStyled,
    CardSimulationMagnetic,
    CardSimulationMagneticStyled,
    CardSimulationNumberStyled,
    CardSimulationStyled, CardSimulationValueStyled
} from "./styled";
import SpacerComponent from "../SpacerComponent/SpacerComponent";
import {Box, Typography} from "@material-ui/core";

class CardSimulationComponent extends Component {
    render() {
        return (
            <CardSimulationStyled>
                <SpacerComponent height={30}/>
                <CardSimulationMagneticStyled/>
                <CardSimulationNumberStyled variant={'h5'}>
                    444222
                </CardSimulationNumberStyled>
                <Box display={'flex'}
                     flexDirection={'row'}
                     justifyContent={'flex-start'}
                     alignItems={'center'}
                     width={'100%'}>
                    <CardSimulationLabelStyled>
                        DATA VENCIMENTO
                    </CardSimulationLabelStyled>
                    <CardSimulationValueStyled>
                        01/25
                    </CardSimulationValueStyled>
                    <CardSimulationLabelStyled>
                        CVV
                    </CardSimulationLabelStyled>
                    <CardSimulationValueStyled>
                        222
                    </CardSimulationValueStyled>
                </Box>
            </CardSimulationStyled>
        );
    }
}

export default CardSimulationComponent;