import React, {Component} from 'react';
import {Box} from "@material-ui/core";
import {ReactComponent as FilterIcon} from "../../Assets/filter_1.svg";
import SearchIcon from '@material-ui/icons/Search';
import {ButtonFilterIconStyled, ButtonFilterStyled} from "./styled";
import SpacerComponent from "../../Components/SpacerComponent/SpacerComponent";

class FilterSaleHistory extends Component {
    render() {
        return (
            <Box display={'flex'}
                 flexDirection={'row'}
                 justifyContent={'flex-start'}
                 alignItems={'center'}>
                <ButtonFilterStyled variant={'contained'}
                                    startIcon={<FilterIcon/>}>
                    Filtros avançados
                </ButtonFilterStyled>
                <SpacerComponent width={20}/>
                <ButtonFilterIconStyled>
                    <SearchIcon/>
                </ButtonFilterIconStyled>
            </Box>
        );
    }
}

export default FilterSaleHistory;