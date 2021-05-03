import styled from "styled-components";
import {Avatar, Typography} from "@material-ui/core";

export const ContentHeader = styled.div`
  padding-top: 64px;
`;

export const LogoHeaderStyled = styled.img`
  width: 180px;
  height: 100%;
`;

export const TitleLogo = styled(Typography)`
  line-height: 0.75;
`;

export const AvatarHeaderStyled = styled(Avatar)`
  background-color: transparent !important;  
`;

export const TextConfigStyled = styled(Typography)`
  margin-left: 15px;
`;