export interface Attachment {
  filename: string;
  contentType: string;
  size: number
}


export interface propsPanelAttachment {
  attachments: Attachment[] | undefined; 
  id: number;
  email:string;
}

export interface propsContainerAttachmentItemImage {
  image:string;
  left:number;
  top:number;
}

export interface propsContainerAttachmentItem {
  first:boolean;
}