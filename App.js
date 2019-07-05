import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import HomeScreen from './home'
import { createStackNavigator, createAppContainer } from 'react-navigation';



export default function App() {
  return (
    <View style={styles.container}>

      <Text>Nguyen minh duc</Text>
      <Image style={{ width: 60, height: 70 }} source={require('./ok.jpg')} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
