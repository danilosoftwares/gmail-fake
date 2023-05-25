import styled from "styled-components";
import { propsLabelTextContainer } from "./types";

export const Container = styled.p<propsLabelTextContainer>`
    color: ${props => props.color};
    margin:0;     
    font-weight: 600;   
`