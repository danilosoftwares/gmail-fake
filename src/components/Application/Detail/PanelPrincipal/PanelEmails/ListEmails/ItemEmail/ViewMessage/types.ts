export interface Attachment {
  filename: string;
  contentType: string;
  size: number
}

export interface Email {
  id: number;
  from: string;
  subject: string;
  date: string;
  attachments: Attachment[];
  body: string;
  textBody: string;
  htmlBody: string;
}

export interface propsViewMessage {
  idMessage: number; 
}