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

import GrowingTextInput from '../components/GrowingTextInput';

export default class FeedbackScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <ScrollView
          keyboardDismissMode='on-drag'
          contentContainerStyle={{ paddingTop: 65 + 30 }}
          style={styles.container}>

          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              placeholder='Full name'
              autoCapitalize='words'
              autoCorrect={false}
              returnKeyType='next'
              style={styles.textInput}
              onSubmitEditing={() => { this._emailInput.focus() }}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              placeholder='Email'
              ref={view => { this._emailInput = view; }}
              style={styles.textInput}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType='next'
              onSubmitEditing={() => { this._phoneInput.focus() }}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              placeholder='Phone number'
              ref={view => { this._phoneInput = view; }}
              keyboardType='phone-pad'
              style={styles.textInput}
              returnKeyType='next'
              onSubmitEditing={() => { this._feedbackInput.focus() }}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.row}>
            <GrowingTextInput
              minHeight={80}
              style={styles.growingTextInput}
              placeholder='Please write at least two or three sentences to share your feedback.'
              ref={view => { this._feedbackInput = view; }}
            />
          </View>

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
  },
  row: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  firstRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
  },
  growingTextInput: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingVertical: 15,
  }
});
