import useStore from '../../../../../../store';
import { ItemEmail } from "./ItemEmail";
import {
  Container,
} from './styles';

const ListEmails = () => {
  const {emailBox, setEmailViewId} = useStore();  

  return (
    <Container>
      { emailBox?.map((item, index)=> {
        return <ItemEmail key={index} click={(e)=>setEmailViewId(item.id)} from={item.from} subject={item.subject} date={item.date} read={false} />
      })}
    </Container>
  );
};



export { ListEmails };