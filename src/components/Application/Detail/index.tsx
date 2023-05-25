import {
  Container,
} from './styles';
import { MenuPrincipal } from "./MenuPrincipal";
import { PanelPrincipal } from "./PanelPrincipal";
import { PanelRight } from "./PanelRight";

export function Detail() {

  return (
    <Container>
      <MenuPrincipal/>
      <PanelPrincipal/>
      <PanelRight/>
    </Container>
  );
};