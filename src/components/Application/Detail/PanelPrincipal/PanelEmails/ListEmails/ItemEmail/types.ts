export interface propsItemEmail {
  from:string;
  subject:string;
  date:string;
  read:boolean;
  click:React.MouseEventHandler<HTMLDivElement>;
}

export interface propsItemEmailContainer {
  read: boolean;
}
