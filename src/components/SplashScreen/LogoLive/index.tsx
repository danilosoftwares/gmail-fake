import {
  Container, ContainerAnimed, Diamond, DiamondBackground, LegLeft, LegRight, ShoulderLeft, ShoulderRight, 
} from './styles';

export function LogoLive() {

  return (
    <Container>              
      <Diamond color={"#f1f3f4"}></Diamond>
      <LegLeft color={"#f1f3f4"}></LegLeft>    
      <LegRight color={"#f1f3f4"}></LegRight>
      <ContainerAnimed>
        <Diamond color={"#ea4335"}></Diamond>  
        <LegLeft color={"#4285f4"}></LegLeft>    
        <LegRight color={"#34a853"}></LegRight>
        <ShoulderRight></ShoulderRight>
        <ShoulderLeft></ShoulderLeft>       
      </ContainerAnimed>
      <DiamondBackground color={"#f1f3f4"}></DiamondBackground>     
    </Container>
  );
};
