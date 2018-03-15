import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  SectionList
} from 'react-native';

import ToggleButton from '../components/ToggleButton';
import heroImage from '../assets/hero.png';

const thursdaySection = [
  {
    id: '8:30 AM',
    data: [{
      id: 0,
      title: 'Registration, breakfast'
    }]
  },
  {
    id: '10:00 AM',
    data: [{
      id: 0,
      title: 'Conference Keynote',
      speaker: 'Oyun Batnasan'
    }]
  }
]

const fridaySection = [
  {
    id: '9:30 AM',
    data: [{
      id: 0,
      title: 'More breakfast'
    }]
  },
  {
    id: '10:30 AM',
    data: [{
      id: 0,
      title: 'More Keynote',
      speaker: 'Oyun Batnasan'
    }]
  }
]

const extractKey = ({ id }) => id;

export default class Schedule extends Component {

  state = {
    selectedDay: 'THURSDAY'
  }

  handlePressItem = (item) => {
    this.setState({
      selectedDay: item
    })
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowTitle}>
          {item.title}
        </Text>
        <Text style={styles.rowSpeaker}>
          {item.speaker}
        </Text>
      </View>
    )
  }

  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          {section.id}
        </Text>
      </View>
    )
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

        <SectionList
          style={styles.list}
          sections={
            selectedDay === 'THURSDAY' ? thursdaySection : fridaySection
          }
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={extractKey}
        />
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
  },
  list: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  sectionHeaderText: {
    fontSize: 13,
  },
  row: {
    backgroundColor: 'white',
    padding: 20,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  rowSpeaker: {
    fontSize: 13,
  }
});
