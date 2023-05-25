import styled from "styled-components";
import { propsContainerAttachmentItem, propsContainerAttachmentItemImage } from "./types";

export const TextFrom = styled.p`
    margin:0px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.44px;
    color: #353638;
`

export const ContainerAttachment = styled.div`
    height: 300px;
    margin-left: 48px;    
`

export const ContainerAttachmentItem = styled.div<propsContainerAttachmentItem>`
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    margin: ${p => p.first ? "16px 0 0 0" : "16px 0 16px 16px"};
    height: 120px;
    width: 200px;
    display: grid;
    grid-template-rows: 1fr 35px;    
`

export const ContainerAttachmentItemMain = styled.div`
    background-color: white;
    border: 1px solid #e5e5e5;    
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const ContainerAttachmentItemBottom = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;    
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;    
    align-items: center;    
`
export const ContainerAttachmentItemBottomText = styled.p`
    margin:0px;
    text-overflow: ellipsis;
    overflow: hidden; 
    width: 160px; 
    height: 1.2em; 
    white-space: nowrap;   
    color: #777;
    font-size: 12px;
    font-weight: bold;     
`

export const ContainerAttachmentItemImage = styled.img<propsContainerAttachmentItemImage>`
    background: ${p => `no-repeat url(${p.image}) ${p.left.toString()}px ${p.top.toString()}px`};
`

export const ContainerAttachmentItemDownImage = styled.div`
    background: rgba(0,0,0,.6);
    border-radius: 3px;
    float: left;
    margin-right: 8px;
    min-width: 0;
    width: 30px;
    height: 24px;
    padding: 0;
    line-height: 23px;
    display: flex;
    justify-content: center;    
    cursor: pointer;       
`

export const ContainerAttachmentItemDown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const ContainerAttachmentItemDownText = styled.p`
    margin:0px;
    text-overflow: ellipsis;
    word-break: break-all;
    width: 160px; 
    height: 1.2em; 
    color: #777;
    font-size: 12px;
    font-weight: bold;     
`

export const ContainerAttachmentItemBottomImage = styled.img`    
    margin:10px
`