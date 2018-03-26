import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  Button,
  Animated,
  PanResponder,
  AsyncStorage
} from 'react-native';

import Modal from 'react-native-root-modal';
import GrowingTextInput from '../components/GrowingTextInput';
import Swipeable from '../components/Swipeable';

const NAME_FIELD_KEY = 'NAME_FIELD_KEY';

export default class FeedbackScreen extends Component {
  static navigationOptions = {
    title: 'Feedback',
  }

  state = {
    modalVisible: false,
    modalOpacity: new Animated.Value(0),
    name: ''
  }

  componentWillMount = async () => {
    try {
      const name = await AsyncStorage.getItem(NAME_FIELD_KEY);
      if (name !== null) {
        this.setState({ name });
      }
    } catch (error) {

    }
  }


  render() {
    const { modalVisible, modalOpacity } = this.state;

    return (
      <View style={{ flex: 1 }}>

        <Modal
          visible={modalVisible}
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent'
          }}>

          <Animated.View
            style={{
              opacity: modalOpacity,
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0, 0.5)'
            }} />
          <Swipeable
            onMove={({ x }) => {
              let newOpacity = calculateOpacity(x);
              modalOpacity.setValue(newOpacity);
            }}

            onEnd={({ x }) => {
              let newOpacity = calculateOpacity(x);
              if (newOpacity < 0.1) {
                this.setState({ modalVisible: false });
                modalOpacity.setValue(0);
              } else {
                Animated.spring(modalOpacity, { toValue: 1 }).start(); // for smooth animation
              }

            }}
          >
            <Animated.View
              style={{
                opacity: modalOpacity,
                height: 300,
                width: 300,
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ marginBottom: 15 }}>
                Do you want to autofill your contact from Facebook
            </Text>
              <Button title={'Login to Facebook'} onPress={() => {
                this.setState({
                  modalVisible: false
                })
              }} />
              <Text style={{ marginTop: 15 }}>
                No thanks!
            </Text>
            </Animated.View>
          </Swipeable>
        </Modal>

        <ScrollView
          keyboardDismissMode='on-drag'
          contentContainerStyle={{ paddingTop: 30 }}
          style={styles.container}>

          <Button
            title={'Autofill contact'}
            onPress={() => {
              const { modalOpacity } = this.state;
              Animated.spring(modalOpacity, { toValue: 1 }).start();
              this.setState({
                modalVisible: true
              });
            }}
          />

          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              placeholder='Full name'
              autoCapitalize='words'
              autoCorrect={false}
              value={this.state.name}
              onChangeText={(name) => {
                this.setState({ name })
              }}
              returnKeyType='next'
              style={styles.textInput}
              onSubmitEditing={async () => {
                try {
                  await AsyncStorage.setItem(NAME_FIELD_KEY, this.state.name);
                  console.log(this.state.name);
                } catch (error) {
                  console.log(`error occured ${error}`);
                }

                this._emailInput.focus()
              }}
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

        <StatusBar barStyle='light-content' />
      </View >
    );
  }
}

const calculateOpacity = (x) => Math.max(0, 100 - Math.abs(x)) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
