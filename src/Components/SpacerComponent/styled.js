import styled from "styled-components";

export const SpacerStyled = styled.div`
  width: ${props => props.width ? props.width + 'px' : 0};
  height: ${props => props.height ? props.height + 'px' : 0};
`;