import React, {Component} from 'react';
import {
    CardSimulationLabelStyled,
    CardSimulationMagneticStyled,
    CardSimulationNumberStyled,
    CardSimulationStyled, CardSimulationValueStyled
} from "./styled";
import SpacerComponent from "../SpacerComponent/SpacerComponent";
import {Box} from "@material-ui/core";

class CardSimulationComponent extends Component {
    render() {
        return (
            <CardSimulationStyled>
                <SpacerComponent height={30}/>
                <CardSimulationMagneticStyled/>
                <CardSimulationNumberStyled variant={'h5'}>
                    {this.props.number}
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
                        {this.props.dateExpired}
                    </CardSimulationValueStyled>
                    <CardSimulationLabelStyled>
                        CVV
                    </CardSimulationLabelStyled>
                    <CardSimulationValueStyled>
                        {this.props.cvv}
                    </CardSimulationValueStyled>
                </Box>
            </CardSimulationStyled>
        );
    }
}

export default CardSimulationComponent;