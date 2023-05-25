import {
  Container, ContainerButton } from './styles';
import calendar from '../../../../../Assets/calendar_2020q4_2x.png';
import note from '../../../../../Assets/keep_2020q4v3_2x.png';
import contact from '../../../../../Assets/contacts_2022_2x.png';

export function SideBarRight() {

  return (
    <Container>
      <ContainerButton><img style={{height:20}} src={calendar} alt={"nothing"}/></ContainerButton>     
      <ContainerButton><img style={{height:20}} src={note} alt={"nothing"}/></ContainerButton>           
      <ContainerButton><img style={{height:20}} src={contact} alt={"nothing"}/></ContainerButton>          
    </Container>
  );
};
