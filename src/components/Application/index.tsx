import {
  Container,
} from './styles';
import { Header } from "./Header";
import { Detail } from "./Detail";

export function Application() {

  return (
    <Container>
      <Header/>
      <Detail/>
    </Container>
  );
};

