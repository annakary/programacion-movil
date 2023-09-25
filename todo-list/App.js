import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import ResetPassword from './ResetPassword';
import SingUp from './SignUp';

// import Login from './Login';
// import ForgotPassword from './ForgotPassword';



export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      {/* <Text className="text-xl">Hola mundo</Text> */}
     {/* <ForgotPassword></ForgotPassword> */}
     {/* <ResetPassword></ResetPassword> */}
     <SingUp></SingUp>
      <StatusBar style="auto" />

    </View>
  );
}


