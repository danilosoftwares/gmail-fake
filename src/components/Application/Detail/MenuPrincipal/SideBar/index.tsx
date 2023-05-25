import {
  Container,
} from './styles';
import { SideBarButton } from "./SideBarButton";

export function SideBar() {

  return (
    <Container>
      <SideBarButton selected={true} icon={"Inbox"} text={"Inbox"}/>
      <SideBarButton selected={false} icon={"Star"} text={"Starred"}/>
      <SideBarButton selected={false} icon={"Time"} text={"Snoozed"}/>
      <SideBarButton selected={false} icon={"Sent"} text={"Sent"}/>
      <SideBarButton selected={false} icon={"Paper"} text={"Drafts"}/>
    </Container>
  );
};