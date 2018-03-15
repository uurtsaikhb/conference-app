import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import EventDetails from './screens/EventDetails';
import Schedule from './screens/Schedule';
import FeedbackScreen from './screens/FeedbackScreen';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <FeedbackScreen />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
