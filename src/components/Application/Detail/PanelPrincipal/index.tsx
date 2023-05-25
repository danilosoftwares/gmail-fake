import { PanelEmails } from "./PanelEmails";
import { ListEmails } from "./PanelEmails/ListEmails";
import { TabBar } from "./PanelEmails/TabBar";
import { ToolBarEmail } from "./PanelEmails/ToolBarEmail";
import {
  Container,
} from './styles';
import useStore from "../../../../store";
import { ViewMessage } from "./PanelEmails/ListEmails/ItemEmail/ViewMessage";

export function PanelPrincipal() {
  const {emailViewId} = useStore();  

  return (
    <Container>
        <PanelEmails>
          <ToolBarEmail/>
          {emailViewId !== 0 ? <ViewMessage idMessage={emailViewId} /> : <><TabBar/><ListEmails/></>}
        </PanelEmails>
    </Container>
  );
};
