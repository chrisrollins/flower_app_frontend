import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Weather from './Weather';

class Dashboard extends Component {

  render(props) {
    return (
      <View>
        <Weather />
      </View>
    );
  }
}

export default Dashboard;
