import { Email, Mailbox } from "../store/types";

export const BASEAPI = "https://www.1secmail.com/api/v1";

export const getTempMail = async (create?:boolean): Promise<string> => {  
  // const emailMemory = create ? null : sessionStorage.getItem("email");
  // if (!emailMemory){
  //   const req = await fetch(`${BASEAPI}/?action=genRandomMailbox`)
  //   const data = await req.json();
  //   const email = data[0];
  //   sessionStorage.setItem("email",email);
  //   return email;
  // }
  // return emailMemory;
  return "email@exemplo.com";
}

export const checkTempMailbox = async (email: String): Promise<Mailbox[]> => {
  const e = email.split("@")
  try{
    const req = await fetch(`${BASEAPI}/?action=getMessages&login=${e[0]}&domain=${e[1]}`)
    const body = await req.json()
  
    return body as Mailbox[]
  } catch (e){
    return [];
  }
}

export const getSingleEmail = async(email: string, id: string): Promise<Email> => {
  const e = email.split("@")
  
  const req = await fetch(`${BASEAPI}/?action=readMessage&login=${e[0]}&domain=${e[1]}&id=${id}`)
  const body = await req.json()

  return body as Email;
}

export const downloadURL = (email: string, id: number, file: string): string => {
  const e = email.split("@")
  
  return `${BASEAPI}/?action=download&login=${e[0]}&domain=${e[1]}&id=${id}&file=${file}`
}