import styled from "styled-components";
import { propsButtomBarContainerLineMarked } from "./types";

export const Container = styled.div<propsButtomBarContainerLineMarked>`
    background: ${props => props.selected ? "#2F80ED" : "white"};
    height:${props => props.selected ? "5px" : "0px"}; 
    width:100%;   
`