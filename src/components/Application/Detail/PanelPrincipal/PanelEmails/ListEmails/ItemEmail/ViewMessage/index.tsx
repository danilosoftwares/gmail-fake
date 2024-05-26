import React, { useEffect, useState } from "react";

import {
  Container, ContainerFrom, ContainerMessage, TextDate, TextFrom, TextMessage, TextSubject,
} from './styles';
import ReactHtmlParser from 'react-html-parser';
import { PanelAttachment } from "./PanelAttachment";
import { Email, propsViewMessage } from "./types";
import useStore from "../../../../../../../../store";
import { getSingleEmail } from "../../../../../../../../api";
import profileImage from '../../../../../../../../Assets/profile_image.png';

const ViewMessage: React.FC<propsViewMessage> = ({ idMessage }) => {
  const [message, setMessage] = useState<Email>();
  const [loading, setLoading] = useState(true);
  const {email} = useStore();  
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleEmail(email,idMessage.toString());
      setMessage(data);
      setLoading(false);
    } 
    fetchData();
  },[email,idMessage]);

  return (
    <Container>
      { loading ? "Loading..." :
      <>
      <TextSubject>{message?.subject}</TextSubject>
      <ContainerFrom>
        <img style={{height:38}} src={profileImage} alt={"nothing"}/>  
        <TextFrom>{message?.from}</TextFrom>
        <TextDate>{message?.date}</TextDate>
      </ContainerFrom>
      <ContainerMessage>
        <TextMessage>        
          { ReactHtmlParser(String(message?.htmlBody)) }          
        </TextMessage>
      <PanelAttachment attachments={message?.attachments} id={Number(message?.id)} email={email} />    
      </ContainerMessage>      
      </> }
    </Container>
  );
};



export { ViewMessage };