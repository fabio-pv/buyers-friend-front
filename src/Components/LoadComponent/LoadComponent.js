import React, {Component} from 'react';
import {ContentMainLoadStyled, LoadStyled, TextLoadStyled} from "./styled";
import {Box} from '@material-ui/core';
import SpacerComponent from "../SpacerComponent/SpacerComponent";

class LoadComponent extends Component {
    render() {

        if(this.props.inLoad === false){
            return <div></div>;
        }

        return (
            <ContentMainLoadStyled>
                <Box display={'flex'}
                     flexDirection={'column'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     height="100%">
                    <LoadStyled/>
                    <SpacerComponent height={20}/>
                    <TextLoadStyled variant={'h6'} className={{color: 'white'}}>
                        Carregando, por favor aguarde
                    </TextLoadStyled>
                </Box>
            </ContentMainLoadStyled>
        );
    }
}

export default LoadComponent;