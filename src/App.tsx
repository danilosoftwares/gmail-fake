import { Application } from './components/Application';
import withSplashScreen from './hoc/withSplashScreen';

function App() {  
  return <Application/> ;
}

export default withSplashScreen(App);


