import React from "react";
import { propsLabelText } from "./types";
import {
  Container,
} from './styles';

const LabelText: React.FC<propsLabelText> = ({ text, color }) => {

  return (
    <Container color={color}>
      {text}
    </Container>
  );
};



export { LabelText };