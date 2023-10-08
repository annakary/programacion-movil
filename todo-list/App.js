import { StatusBar } from 'expo-status-bar';


import React from 'react';
import { Text, View } from 'react-native';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import Login from './Login';
// import ForgotPassword from './ForgotPassword';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    
  
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>

   
  );
}


