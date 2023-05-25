import React from "react";
import {
  Container, 
} from './styles';
import { propsToolBarButtom } from "./types";
import { Refresh, Return } from "../../../../../../../Icons";

const ToolBarButtom: React.FC<propsToolBarButtom> = ({ icon, click }) => {

  return (
    <Container onClick={click}>   
      { icon === "Refresh" ? <Refresh size={20} color={"#333333"}/> :
      <Return size={20} color={"#333333"}/> }
    </Container>
  );
};



export { ToolBarButtom };