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

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';


class ScheduleTabIcon extends React.Component {
  render() {
    return (
      <Icon
        name="ios-calendar-outline"
        size={30}
        color={this.props.tintColor} />
    )
  }
}

class FeedbackTabIcon extends React.Component {
  render() {
    return (
      <Icon
        name="ios-contact-outline"
        size={30}
        color={this.props.tintColor} />
    )
  }
}

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
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: (props) => <ScheduleTabIcon {...props} />
    }
  });

const FeedbackStack = StackNavigator(
  { FeedbackForm: { screen: FeedbackScreen } },
  {
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: (props) => <FeedbackTabIcon {...props} />
    }
  })

const AppNavigation = TabNavigator(
  {
    Schedule: { screen: ScheduleStack },
    Feedback: { screen: FeedbackStack }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: 'white',
        height: 55
      },
      inactiveTintColor: 'gray',
      activeTintColor: 'purple'
    }
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
