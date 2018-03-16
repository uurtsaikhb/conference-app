import React from 'react';
import { TextInput, View } from 'react-native';

// Try it: https://snack.expo.io/ByW4CFPx-
export default class GrowingTextInput extends React.Component {
  static defaultProps = {
    minHeight: 30,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      height: props.minHeight,
    };
  }

  focus() {
    this._ref.focus();
  }

  blur() {
    this._ref.blur();
  }

  clear() {
    this._ref.clear();
  }

  measure(callback) {
    this._ref.measure(callback);
  }

  setNativeProps(props) {
    this._ref.setNativeProps(props);
  }

  render() {
    return (
      <TextInput
        ref={c => {
          this._ref = c;
        }}
        multiline={true}
        onContentSizeChange={this._onChangeContentSize}
        {...this.props}
        style={[
          this.props.style,
          { height: Math.max(this.props.minHeight, this.state.height) },
        ]}
      />
    );
  }

  _onChangeContentSize = e => {
    this.setState({ height: e.nativeEvent.contentSize.height });
  };
}