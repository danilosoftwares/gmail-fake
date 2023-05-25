import { ButtonWriteEmail } from "./ButtonWriteEmail";
import { SideBar } from "./SideBar";
import {
  Container,
} from './styles';

export function MenuPrincipal() {

  return (
    <Container>
        <ButtonWriteEmail/>
        <SideBar/>
    </Container>
  );
};
