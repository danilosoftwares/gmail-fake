import { Pencil } from "../../../../../Icons";
import { LabelText } from "../../../../LabelText";
import {
  Container,
} from './styles';

export function ButtonWriteEmail() {
  return (
    <Container>
    <Pencil color={"black"}/>
    <LabelText color={"#4F4F4F"} text={"Compose"}></LabelText>
    </Container>
  );
};