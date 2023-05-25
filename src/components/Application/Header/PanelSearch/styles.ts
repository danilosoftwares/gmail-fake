import styled from "styled-components";

export const Container = styled.div`
    background: #F7F8FC;    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContainerEmail = styled.div`
    display: flex;
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 8px;
    align-items: center;
    width: 300px;
    align-items: center;
    justify-content: space-between;        
`

export const ContainerIcon = styled.div`
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