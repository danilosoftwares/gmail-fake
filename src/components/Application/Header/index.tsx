import {
  Container,
} from './styles';
import { BrandSide } from "./BrandSide";
import { PanelSearch } from "./PanelSearch";
import { Profile } from "./Profile";

export function Header() {

  return (
    <Container>
        <BrandSide/>
        <PanelSearch/>
        <Profile />
    </Container>
  );
};