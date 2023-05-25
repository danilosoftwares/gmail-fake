import React from "react";
import { propsPanelEmails } from "./types";
import {
  Container,
} from './styles';

const PanelEmails: React.FC<propsPanelEmails> = ({ children }) => {

  return (
    <Container>
      { children }
    </Container>
  );
};



export { PanelEmails };