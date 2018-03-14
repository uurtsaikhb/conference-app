import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

export default class ToggleButton extends Component {

  renderItem = (item, index, list) => {

    const { onPressItem, value } = this.props;

    return (
      <TouchableOpacity
        onPress={onPressItem.bind(this, item)}
        style={[
          styles.button,
          {
            marginLeft: index !== 0 ? 10 : 0,
            backgroundColor: item === value ? 'purple' : 'maroon'
          }
        ]}
        key={item}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { items, value } = this.props;

    return (
      <View style={styles.container}>
        {items.map(this.renderItem)}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: 'purple',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});
