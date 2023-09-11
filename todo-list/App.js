import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';



export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-pink-600">
      <Text className="text-xl">Hola mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}


