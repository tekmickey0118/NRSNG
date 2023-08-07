import React, {useEffect} from 'react';
import RootStackNavigation from './src/navigations';
import SplashScreen from 'react-native-splash-screen';

export default (): JSX.Element => {
  useEffect(() => {
    async function prepare() {
      try {
        // our api calls will be here.
        new Promise(resolve => setTimeout(resolve, 5000)); // wait for 5 secs
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }
    prepare();
  });

  return <RootStackNavigation />;
};
