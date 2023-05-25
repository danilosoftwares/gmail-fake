import styled from "styled-components";

export const Container = styled.div`
    background: white;
    border-radius: 55px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;  
    display: flex;
    flex-direction: column;  
    transition: background 0.2s;   
    cursor: pointer;  
    
    &:hover {
        background: #E0E0E0;
    }
`

export const ContainerIconText = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    padding-top: 10px;        
`

export const ImageIcon = styled.img`
    margin-left:10px;
    margin-right:10px;
    size:13px;
`