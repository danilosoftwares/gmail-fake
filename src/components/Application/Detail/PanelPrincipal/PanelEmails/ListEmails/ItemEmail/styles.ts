import styled from "styled-components";
import { propsItemEmailContainer } from "./types";

export const Container = styled.div<propsItemEmailContainer>`
    background: ${p => p.read ? "#F2F5FC" : "#FFFFFF"};
    display: grid;
    grid-template-columns: 35px 35px 200px 1fr 150px; 
    border-bottom: 1px solid #E0E0E0;
    height: 35px;      
    align-items: center;
    margin-top: 1px;
    padding-left: 15px;    
    cursor: pointer;

    &:hover {
        box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
    }       
`

export const ItemSubject = styled.p`
    margin:0px;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
`

export const ItemFrom = styled.p`
    margin:0px;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
`

export const ItemMessage = styled.p`
    margin:0px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #414244;
`

export const ItemSubjectMessage = styled.div`
    display: flex;
`