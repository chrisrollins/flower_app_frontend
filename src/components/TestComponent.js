import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FruitLoader } from './';

class TestComponent extends Component {
  render() {
    return (
      <View>
        <FruitLoader size="medium" text="..." />  
      </View>
    );
  }
}

export default TestComponent;
