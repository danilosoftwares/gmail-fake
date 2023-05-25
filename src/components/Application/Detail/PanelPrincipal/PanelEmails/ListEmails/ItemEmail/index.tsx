import React, { useState } from "react";
import { CheckBox, Star } from "../../../../../../../Icons";
import { propsItemEmail } from "./types";
import {
  Container, ItemFrom, ItemMessage, ItemSubject, ItemSubjectMessage,
} from './styles';

const ItemEmail: React.FC<propsItemEmail> = ({ from, subject, date, read, click }) => {
  const [aboveItem, setAboveItem] = useState(false);

  return (
    <Container read={read} onClick={click} onMouseOver={()=>setAboveItem(true)} onMouseOut={()=>setAboveItem(false)}>
      <CheckBox opacity={aboveItem?1:0.32} color={"#333333"}/>
      <Star opacity={aboveItem?1:0.32} color={"#333333"}/>
      <ItemFrom>{from}</ItemFrom>     
      <ItemSubjectMessage>
        <ItemSubject>{subject}</ItemSubject>
      </ItemSubjectMessage> 
      <ItemMessage>{date}</ItemMessage>      
    </Container>
  );
};



export { ItemEmail };