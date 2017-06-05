import React, { Component } from 'react';
import { Text, View } from 'react-native';
import weatherFuncs from './../config/weatherAPI';
import axios from 'axios';

class Dashboard extends Component {

  state = { weather: 'waiting...'};

  componentDidMount() {
    const dash = this;
    console.log(weatherFuncs);
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        weatherFuncs.getWeatherByCoords(position.coords.latitude, position.coords.longitude).then(response => {
        console.log('response:', JSON.parse(response.data));
        const data = response.data;
        dash.setState({ weather: JSON.parse(response.data).weather[0].main });
      }).catch(error => {
        console.log(error);
        //this.setState({ weather: error });
      });
    });

    
  };

  render() {
    return (
      <View>
        <Text>{this.state.weather}</Text>
      </View>
    );
  }
}

export default Dashboard;
