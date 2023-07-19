import { useCallback, useEffect } from 'react';
import { checkTempMailbox } from '../../../../../../api';
import useStore from '../../../../../../store';
import { ItemEmail } from "./ItemEmail";
import {
  Container,
} from './styles';

const ListEmails = () => {
  const {email, emailBox, setEmailBox, setEmailViewId} = useStore();  

  const getEmails = async () => {
    if (email !== ""){
      try{
        const all = await checkTempMailbox(email);
        setEmailBox(all);
      } catch(e){

      }
    }
  }  

  const memoryGetEmails = useCallback(getEmails, [email,setEmailBox])

  useEffect(() => {
    //memoryGetEmails();
    // const timer = setInterval(()=>{memoryGetEmails()}, 10000);    
    // return () => {
    //   clearInterval(timer);
    // }      
  });

  return (
    <Container>
      { emailBox?.map((item, index)=> {
        return <ItemEmail key={index} click={(e)=>setEmailViewId(item.id)} from={item.from} subject={item.subject} date={item.date} read={false} />
      })}
    </Container>
  );
};



export { ListEmails };