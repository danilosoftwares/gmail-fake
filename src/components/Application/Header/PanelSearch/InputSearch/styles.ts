import styled from "styled-components";

export const Container = styled.div`
    background: #EAF1FB;
    border-radius: 8px;
    width: 640px;
    height: 44px;  
    display: grid;
    grid-template-columns: 50px 1fr 50px; 
`

export const Input = styled.input`
    border: none;
    background: rgb(234, 241, 251);
    color: #757575;
    font-size: medium;

    &:focus {
        outline:none;
    }
`