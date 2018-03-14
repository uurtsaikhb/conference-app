import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View
} from 'react-native';

import ToggleButton from '../components/ToggleButton';
import heroImage from '../assets/hero.png';


export default class Schedule extends Component {

  state = {
    selectedDay: 'THURSDAY'
  }

  handlePressItem = (item) => {
    this.setState({
      selectedDay: item
    })
  }

  render() {
    const { selectedDay } = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={heroImage}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}></Image>
          <Text style={styles.title}>Conference - Ulaanbaatar</Text>

          <ToggleButton
            items={['THURSDAY', 'FRIDAY']}
            value={selectedDay}
            onPressItem={this.handlePressItem}
          />
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image: {
    paddingVertical: 30,
    height: null,
    width: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 56,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  }
});
