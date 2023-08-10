import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../global/Type';

import {HomeScreen} from '../screens/Home';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default (): JSX.Element => {
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={navigationOptions}>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
