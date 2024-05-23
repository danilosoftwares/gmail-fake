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