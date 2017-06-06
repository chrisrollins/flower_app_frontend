import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { updateWeather } from './../actions/WeatherActions';

class Weather extends Component {

  componentDidMount() {
    const thisComponent = this;
    navigator.geolocation.getCurrentPosition(function(position){
      console.log("About to get weather from position:", position);
      console.log(thisComponent);
      thisComponent.props.updateWeather(position.coords.latitude, position.coords.longitude);
    });
  };

  render() {
    console.log("Weather this.props:", this.props);
    let weather = "loading weather...";
    if(this.props.weather.weather) {
      weather = this.props.weather.weather[0].main;
    }
    return (
      <View>
        <Text>{ weather }</Text>
      </View>
    );
  }
}

const styles = {};

const mapStateToProps = ( { weather }) => {
  return weather;
};

export default connect(mapStateToProps, { updateWeather }
)(Weather);