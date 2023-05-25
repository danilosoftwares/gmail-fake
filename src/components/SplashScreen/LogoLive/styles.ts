import styled, { keyframes } from "styled-components";
import { propsLoadingBlocks } from "./types";

const breatheAnimation = keyframes`
 0%   { scale: 1.9 ; } 
 100% { scale: 1.0 ; }
`
export const Container = styled.div`
    height: 165px;
    width: 220px;
    border-radius: 22px 22px 15px 15px;
    overflow: hidden;   
    position: relative;   
`

export const LegLeft = styled.div<propsLoadingBlocks>`
    height: 142px;
    top: 41px;
    width: 51px;
    background: ${p => p.color};
    left: -1px;
    position: absolute;    
`

export const LegRight = styled.div<propsLoadingBlocks>`
    height: 142px;
    top: 41px;
    width: 51px;
    background: ${p => p.color};
    position: absolute;   
    right: -1px;     
`

export const Diamond = styled.div<propsLoadingBlocks>`
    height: 220px;
    top: -101px;
    transform: scaleY(.75)rotate(45deg);
    width: 220px;
    background: ${p => p.color};
    position: absolute;   
`

export const ContainerAnimed = styled.div`
    height: 165px;
    width: 220px;
    border-radius: 22px 22px 15px 15px;
    overflow: hidden;   
    position: relative;  
    
    animation-name: ${breatheAnimation};
    animation-duration: 2s;    
    transform-origin: 110px 203px;    
`
export const DiamondBackground = styled.div<propsLoadingBlocks>`
    height: 220px;
    top: -166px;
    transform: scaleY(.75)rotate(45deg);
    width: 220px;
    background: ${p => p.color};    
    position: absolute;        
`
export const ShoulderRight = styled.div`
    height: 108px;
    width: 51px;
    background: #fbbc04;
    transform: scaleY(.75)skew(0,-45deg);
    transform-origin: top left;
    position: absolute;     
    right: -1px;       
`
export const ShoulderLeft = styled.div`
    height: 108px;
    width: 51px;
    background: #c5221f;
    transform: scaleY(.75)skew(0,45deg);
    transform-origin: top right;
    position: absolute;     
    left: -1px;       
`