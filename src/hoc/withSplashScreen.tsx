import React from 'react';
import { SplashScreen } from '../components/SplashScreen';

function withSplashScreen<P extends any>(WrappedComponent: React.ComponentType<P>,) {
    return class extends React.Component<P,any> {
      
      async componentDidMount() {
        this.setState({ loading: true});
      }
  
      render() {
          return this.state?.loading ? <SplashScreen closing={()=>this.setState({ loading: false})}/>
          :
          <WrappedComponent {...this.props} />   ;
      }
    };
  }


export default withSplashScreen;

