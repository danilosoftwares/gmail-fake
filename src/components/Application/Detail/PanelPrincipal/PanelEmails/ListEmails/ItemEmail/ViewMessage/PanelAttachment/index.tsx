import React, { useState } from "react";
import { downloadURL } from "../../../../../../../../../api";
import { ArrowDown, PaperBlue, Tag } from "../../../../../../../../../Assets";
import { propsPanelAttachment } from "./types";
import {
   ContainerAttachment, ContainerAttachmentItem, ContainerAttachmentItemBottom, ContainerAttachmentItemBottomText, ContainerAttachmentItemDown, ContainerAttachmentItemDownImage, ContainerAttachmentItemDownText, ContainerAttachmentItemMain, TextFrom,
} from './styles';

const PanelAttachment: React.FC<propsPanelAttachment> = ({ email, id, attachments }) => {
  const [moving, setMoving] = useState(false);  

  return (
   
    <ContainerAttachment>
      <TextFrom>{`${attachments?.length} Attachments`}</TextFrom>
      {attachments?.map((item, index)=>
        <ContainerAttachmentItem onMouseOver={()=>setMoving(true)} onMouseOut={()=>setMoving(false)} first={index===0}>
          {moving ? 
          <>
            <ContainerAttachmentItemDown>
              <ContainerAttachmentItemDownText>{item.filename}</ContainerAttachmentItemDownText>
              <a href={downloadURL(email, id, item.filename)} download>
              <ContainerAttachmentItemDownImage>                                
                <ArrowDown/>
              </ContainerAttachmentItemDownImage>
              </a>
            </ContainerAttachmentItemDown>                      
          </>
          :
          <>
            <ContainerAttachmentItemMain>
            <Tag/>            
            </ContainerAttachmentItemMain>
            <ContainerAttachmentItemBottom>              
              <PaperBlue></PaperBlue>
              <ContainerAttachmentItemBottomText>{item.filename}</ContainerAttachmentItemBottomText>
            </ContainerAttachmentItemBottom> 
          </>
          }
        </ContainerAttachmentItem>
      )}
    </ContainerAttachment>
  );
};



export { PanelAttachment };