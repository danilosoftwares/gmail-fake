import React from "react";
import {
  Container, ContainerIconText, 
} from './styles';
import { LabelText } from "../../../../../LabelText";
import { propsSideBarButton } from "./types";
import { Inbox, Sent, Star, Time, Paper } from "../../../../../../Icons";

const SideBarButton: React.FC<propsSideBarButton> = ({ text, icon, selected }) => {

  return (
    <Container selected={selected}>   
      <ContainerIconText>
      { icon === "Inbox" ? <Inbox color={selected ? "#2F80ED" : "#828282"} size={18} /> : 
      icon === "Star" ? <Star color={selected ? "#2F80ED" : "#828282"} size={22}/> : 
      icon === "Time" ?  <Time color={selected ? "#2F80ED" : "#828282"} size={18}/> :
      icon === "Paper" ?  <Paper color={selected ? "#2F80ED" : "#828282"} size={18}/> :      
      <Sent  color={selected ? "#2F80ED" : "#4F4F4F"} /> }
        <LabelText color={selected ? "#2F80ED" : "#4F4F4F"} text={text}></LabelText>
      </ContainerIconText>   
    </Container>
  );
};



export { SideBarButton };