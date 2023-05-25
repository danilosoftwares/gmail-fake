import React from "react";
import {
  Container, ContainerIconText, 
} from './styles';
import { LabelText } from "../../../../../../LabelText";
import { propsButtonBar } from "./types";
import { LineMarked } from "./LineMarked";
import { Inbox, Social, Tag } from "../../../../../../../Icons";

const ButtonBar: React.FC<propsButtonBar> = ({ text, icon, selected }) => {

  return (
    <Container>   
      <ContainerIconText>
      { icon === "Inbox" ? <Inbox color={selected ? "#2F80ED" : "#828282"} size={18} /> : 
      icon === "Social" ? <Social color={selected ? "#2F80ED" : "#828282"} size={18}/> : 
                            <Tag color={selected ? "#2F80ED" : "#828282"} size={18}/>}
        <LabelText color={selected ? "#2F80ED" : "#4F4F4F"} text={text}></LabelText>
      </ContainerIconText>   
      <LineMarked selected={selected}></LineMarked>
    </Container>
  );
};



export { ButtonBar };