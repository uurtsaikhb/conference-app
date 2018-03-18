import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  SectionList,
  TouchableOpacity
} from 'react-native';

import ToggleButton from '../components/ToggleButton';
import heroImage from '../assets/hero.jpg';

const thursdaySection = [
  {
    id: '8:30 AM',
    data: [{
      id: 0,
      title: 'Registration, breakfast',
      description: 'Attendees have to register to get a badge and enter breakfast room.'
    }]
  },
  {
    id: '10:00 AM',
    data: [{
      id: 0,
      title: 'Conference Keynote',
      speaker: 'Oyun Batnasan',
      description: 'Speaker to will talk about keynote'
    }]
  },
  {
    id: '11:30 AM',
    data: [{
      id: 0,
      title: 'Lunch break',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
    }]
  },
  {
    id: '01:00 PM',
    data: [{
      id: 0,
      title: 'Question and Answers',
      speaker: 'Oyun Batnasan',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }]
  },
]

const fridaySection = [
  {
    id: '9:30 AM',
    data: [{
      id: 0,
      title: 'More breakfast',
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
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

  static navigationOptions = {
    header: null
  }

  state = {
    selectedDay: 'THURSDAY'
  }

  handlePressItem = (item) => {
    this.setState({
      selectedDay: item
    })
  }

  _handlePressRow = (item) => {
    let { navigate } = this.props.navigation;
    navigate('EventDetails', { item });
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => this._handlePressRow(item)}>
        <Text style={styles.rowTitle}>{item.title}</Text>
        <Text style={styles.rowSpeaker}>{item.speaker}</Text>
      </TouchableOpacity>
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
          source={heroImage}
          blurRadius={2}>

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
    alignItems: 'center',
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
