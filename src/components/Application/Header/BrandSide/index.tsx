import { SideBar } from "../../../../Icons";
import {
  Container,
} from './styles';
import logo from '../../../../Assets/logo_gmail_lockup_light_1x_r5.png';

export function BrandSide() {
  return (
    <Container>
      <SideBar color={"#64676C"}/>
      <img src={logo} alt={"nothing"}/>
    </Container>
  );
};
