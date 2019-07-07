import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View } from 'react-native';

export default class UselessTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        const { text } = this.state
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Text> cascas </Text>
                <Text> {text}</Text>
                <Text> {text}</Text>

                <Text> {text}</Text>

                <Text> {text}</Text>
                <Text> {text}</Text>

                <Text> {text}</Text>
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
