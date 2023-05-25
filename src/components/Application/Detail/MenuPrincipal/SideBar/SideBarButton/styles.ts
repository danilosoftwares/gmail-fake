import styled from "styled-components";
import { propsSideBarButtonContainer } from "./types";

export const Container = styled.div<propsSideBarButtonContainer>`
    height: 100%;
    width: 209px;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    display: flex;
    flex-direction: column;   
    background: ${props => props.selected ? "#D3E3FD" : "none"};
    border-radius: 0px 17px 17px 0px;      
    padding-left: 23px;
    cursor: pointer;  
    
    &:hover {
        background: ${props => props.selected ? "#D3E3FD" : "#E0E0E0"};
    }
`

export const ContainerIconText = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    padding-top: 7px;        
    padding-bottom: 7px;   
    height : 22px;
`

export const ImageIcon = styled.img`
    margin-left:10px;
    margin-right:10px;
    size:13px;
`