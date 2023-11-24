import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import tw from 'twrnc';
import LoginScreen from './LoginScreen';

export default function App() {
  return (
    // <View style={tw`flex-1 justify-center items-center bg-black`}>
    //   <Text style={tw`text-white text-3xl`}> Hello world</Text>
    //   <StatusBar style="auto" />
    // </View>
    <LoginScreen/>
  );
}



