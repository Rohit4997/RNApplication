/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/Navigator/StackNavigator';
import Home from './src/Screens/Home';
 
 function InitApp(): JSX.Element {
   return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
   );
 }

 export default InitApp;