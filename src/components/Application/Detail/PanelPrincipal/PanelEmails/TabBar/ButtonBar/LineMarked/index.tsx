import React from "react";
import { propsButtomBarContainerLineMarked } from "./types";
import {
  Container
} from './styles';

const LineMarked: React.FC<propsButtomBarContainerLineMarked> = ({ selected }) => {

  return (
    <Container selected={selected}/>
  );
};



export { LineMarked };