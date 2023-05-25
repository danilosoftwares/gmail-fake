import React, { useEffect } from "react";
import { propsSplashScreen } from "./types";
import { LogoLive } from "./LogoLive";
import {
  Container, ImageGoogle, ProgressBar, ProgressBarValue,
} from './styles';

const SplashScreen: React.FC<propsSplashScreen> = ({ closing }) => {
  useEffect(() => {
      const interval = setInterval(() => {
        closing();
      }, 4000);
      return () => {
          clearInterval(interval);
      }
  });

  return (
    <Container>
      <LogoLive/>
      <ProgressBar><ProgressBarValue/></ProgressBar>
      <ImageGoogle src="https://ssl.gstatic.com/ui/v1/icons/mail/google_workspace_2x.png" alt="Google Workspace" width="256" height="34"></ImageGoogle>
    </Container>
  );
};



export { SplashScreen };