import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder
} from 'react-native';


export default class Swipeable extends Component {

  state = {
    dragging: false,
    offsetTop: 0,
    offsetLeft: 0
  }

  panResponder = {}

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    })
  }

  render() {
    const { children } = this.props;
    const {
      dragging,
      offsetTop,
      offsetLeft
    } = this.state;

    const style = {
      top: offsetTop,
      left: offsetLeft,
    }

    return (
      <View
        {...this.panResponder.panHandlers}
        style={[styles.box, style]} >

        {children}

      </ View>
    )
  }

  handleStartShouldSetPanResponder = () => {
    return true;
  }

  handlePanResponderGrant = () => {
    this.setState({ dragging: true })
  }

  handlePanResponderMove = (e, gestureState) => {
    const { onMove } = this.props;
    onMove({ x: gestureState.dx }); //callback

    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx
    })
  }

  handlePanResponderEnd = (e, gestureState) => {
    const { onEnd } = this.props;
    onEnd({ x: gestureState.dx }); //callback

    this.setState({
      dragging: false,
      offsetTop: 0,
      offsetLeft: 0
    })
  }
}

const styles = StyleSheet.create({
  box: {

  }
})