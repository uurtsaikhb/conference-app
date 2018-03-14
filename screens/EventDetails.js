import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';



export default class EventDetails extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.defailsContainer}>
          <Text style={styles.title}>Conference Keynote</Text>
          <Text style={styles.subtitle}>Auguest 14, 2018</Text>
          <Text style={styles.description}>Hear about nice things</Text>
        </View>

        <View style={styles.speakerContainer}>
          <Image style={styles.image} source={require('../assets/profile.jpg')} />
          <View style={styles.speakerDetailContainer}>
            <Text style={styles.speakerName}>Oyun Batnasan</Text>
            <Text style={styles.speakerBio}>Auditor @amazon</Text>
          </View>
        </View>

      </View>
    );
  }
}

const IMAGE_SIZE = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  defailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
  },
  speakerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    backgroundColor: 'black',
    marginRight: 10,
  },
  speakerDetailContainer: {
    justifyContent: 'center'
  },
  speakerName: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500',
  },
  speakerBio: {
    color: 'black',
    fontSize: 13,
    fontWeight: '400',
  }
});
