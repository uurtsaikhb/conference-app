import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,
  TextInput
} from 'react-native';


export default class FeedbackScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <ScrollView
          contentContainerStyle={{ paddingTop: 65 }}
          style={styles.container}>
        </ScrollView >

        <View style={styles.navbar}>
          <Text style={styles.titleText}>Feedback</Text>
        </View>

        <StatusBar barStyle='light-content' />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  titleText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  }
});
