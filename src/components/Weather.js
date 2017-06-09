import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { updateWeather } from './../actions/WeatherActions';
import { kelvinToCelsius, kelvinToFahrenheit } from './../config/util.js';

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
    console.log("Weather this.props: ", this.props);
    let weather = "loading weather...";
    if(Object.keys(this.props.weather).length > 0) {
      const parsed = JSON.parse(this.props.weather);
      const tempF = Math.round(kelvinToFahrenheit(parsed.main.temp));
      const tempC = Math.round(kelvinToCelsius(parsed.main.temp));
      console.log(parsed);
      weather = `Weather: ${parsed.weather[0].main}\nTemperature: ${tempF}º F / ${tempC}º C`;
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