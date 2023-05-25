import { MagnifyingGlass, Settings } from "../../../../../Icons";
import {
  Container, Input,
} from './styles';

export function InputSearch() {

  return (
    <Container>
      <MagnifyingGlass color="#64676C"/>
      <Input placeholder="Search Mail"/>
      <Settings color="#4F4F4F"/>
    </Container>
  );
};