import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text> Hello {this.props.greeting} </Text>
      </View>
    );

  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting greeting="People!" />
        <Text style={styles.bigBlue}> Yo, Bruh </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
