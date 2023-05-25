import styled from "styled-components";

export const Container = styled.div`
    background: #FFFFFF;    
    border-radius: 15px;   
    display: grid;
    grid-template-rows: 35px 46px 1fr;  
    margin-left: 30px;
    overflow-y: scroll;
    height: calc(100vh - 170px);    
`

export const TextSubject = styled.p`
    margin:0px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 25px;
    letter-spacing: -0.07px;
    margin-left: 48px;
`

export const TextFrom = styled.p`
    margin:0px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.44px;
    color: #353638;
`

export const TextDate = styled.p`
    margin:0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.14px;
    color: #818488;
`

export const ContainerFrom = styled.div`
    display: grid;
    grid-template-columns: 38px 1fr 125px;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;   
    gap: 10px;     
`

export const ContainerMessage = styled.div`
 
`

export const TextMessage = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 135.69%;
    letter-spacing: 0.04px;
    color: #535456;
    margin-left: 48px;    
    border-bottom: 2px solid #ECEFF1;
    padding-bottom: 25px;    
    white-space: normal;
`