import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0%   { width: 0%  ; }
 30%  { width: 30% ; }
 40%  { width: 40% ; }
 100% { width: 100%; }
`
export const Container = styled.div`
    background: #F7F8FC;    
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;        
`

export const ProgressBar = styled.div`
    background-color: #f1f1f1;
    height: 4px;
    margin: 56px auto 20px;
    opacity: 1;
    overflow: hidden;
    position: relative;
    width: 300px;
`
export const ProgressBarValue = styled.div`
    animation-name: ${breatheAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;

    background-color: #db4437;
    content: '';
    display: block;
    height: 100%;
    position: absolute;        
    width: 100%;
`

export const ImageGoogle = styled.img`

`
