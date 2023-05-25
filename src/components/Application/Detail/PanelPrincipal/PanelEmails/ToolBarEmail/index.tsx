import React from "react";
import { checkTempMailbox } from "../../../../../../api";
import {
  Container,
} from './styles';
import { ToolBarButtom } from "./ToolBarButtom";
import useStore from "../../../../../../store";

export function ToolBarEmail() {
  const { email, setEmailBox, setEmailViewId, emailViewId } = useStore();  

  const getEmails = async () => {
    const emails = await checkTempMailbox(email);
     setEmailBox(emails);
  }  
  const goBack = () => {
    setEmailViewId(0);
  }

  return (
    <Container>
      { emailViewId !== 0 ? <ToolBarButtom click={goBack} icon={"Return"}/> :
      <ToolBarButtom click={getEmails} icon={"Refresh"}/> }
    </Container>
  );
};
