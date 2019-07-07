import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
// import HomeScreen from './home'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Input from './Input'
import io from 'socket.io-client';
const socket = io('http://localhost:3000')
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: []
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Click deeeeeeeeeee"
          onPress={() => {
            this.setState({ arr: [...this.state.arr, ...["213123"]] })
            socket.emit('nativeSocket', 'cnasncjasnjcks')
          }}
        />
        {this.state.arr.map((item, key) => <Text key={key}>{item}</Text>)}
      </View>
    );
  }
}

export class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <View style={styles.container}>

        {/* <Text>Nguyen sminh duc</Text> */}
        <Image style={{ width: 60, height: 70 }} source={require('./ok.jpg')} />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />

        </View>
        <View>
          <Input />
        </View>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: App,
});
export default createAppContainer(TabNavigator);
