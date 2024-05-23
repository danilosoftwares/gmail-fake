import React from "react";
import { downloadURL } from "../../../../../../../../../api";
import { propsPanelAttachment } from "./types";
import {
   ContainerAttachment, TextFrom,
} from './styles';

const PanelAttachment: React.FC<propsPanelAttachment> = ({ email, id, attachments }) => {
  return (  
    <ContainerAttachment>
      <TextFrom>{`${attachments?.length} Attachments`}</TextFrom>
      {attachments?.map((item, index)=>
        <a href={downloadURL(email, id, item.filename)} download>{item.filename}</a>     
      )}
    </ContainerAttachment>
  );
};



export { PanelAttachment };