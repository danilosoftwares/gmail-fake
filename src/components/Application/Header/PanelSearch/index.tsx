import React, { useEffect } from 'react';
import { getTempMail } from '../../../../api';
import { Copy, Refresh } from '../../../../Icons';
import useStore from '../../../../store';
import { InputSearch } from "./InputSearch";
import {  Container, ContainerEmail, ContainerIcon } from './styles';

export function PanelSearch() {
  const {email, setEmail} = useStore();  

  const makeEmail = async () => {
    const data = await getTempMail(true);
    setEmail(data);
  }

  const ClipBoard = () => {
    navigator.clipboard.writeText(email);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTempMail();
      setEmail(data);
    }
    fetchData();
  },[setEmail]);

  return (
    <Container>
      <InputSearch/>
      <ContainerEmail> 
        <ContainerIcon onClick={ClipBoard}>
          <Copy size={18} color={"#4F4F4F"}/>
        </ContainerIcon>
        <ContainerIcon onClick={makeEmail}>
          <Refresh size={18} color={"#4F4F4F"}/>
        </ContainerIcon>
        {email}
      </ContainerEmail>
    </Container>
  );
};
