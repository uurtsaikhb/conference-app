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

import { StackNavigator, TabNavigator } from 'react-navigation';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: 'purple',
  },
  headerTintColor: 'white'
}

const ScheduleStack = StackNavigator(
  {
    ScheduleList: { screen: Schedule },
    EventDetails: { screen: EventDetails }
  }, {
    headerMode: 'screen',
    navigationOptions: defaultNavigationOptions
  });

const FeedbackStack = StackNavigator(
  {
    FeedbackForm: { screen: FeedbackScreen },
  }, {
    navigationOptions: defaultNavigationOptions
  }
)

const AppNavigation = TabNavigator(
  {
    Schedule: { screen: ScheduleStack },
    Feedback: { screen: FeedbackStack }
  }, {
    tabBarPosition: 'bottom',
    swipeEnabled: false
  }
)

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <AppNavigation />

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
