import React from "react";
import {
  Container,
} from './styles';
import { ButtonBar } from "./ButtonBar";

export function TabBar() {

  return (
    <Container>
      <ButtonBar selected={true} icon={"Inbox"} text={"Primary"}></ButtonBar>
      <ButtonBar selected={false} icon={"Tag"} text={"Promotions"}></ButtonBar>
      <ButtonBar selected={false} icon={"Social"} text={"Social"}></ButtonBar>
    </Container>
  );
};