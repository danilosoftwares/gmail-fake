

import { useEffect, useState } from "react";
import {
  Container, ImageUser,
} from './styles';
import useStore from "../../../../store";

export function Profile() {
  const {email} = useStore();  
  const [urlUser, setUrlUser] = useState("");

  const getRandonColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  useEffect(()=>{
    const currently = sessionStorage.getItem("imgUser");
    if (currently && currently?.indexOf(email) > -1){
      setUrlUser(currently) 
    } else {
      const newURL = `https://api.dicebear.com/6.x/adventurer/svg?seed=${email}&size=32&radius=32&backgroundColor=${getRandonColor()}`;
      sessionStorage.setItem('imgUser', newURL);      
      setUrlUser(newURL);
    }    
  },[email])

  return (
    <Container>
      <ImageUser src={urlUser} alt={"nothing"} />
    </Container>
  );
};
