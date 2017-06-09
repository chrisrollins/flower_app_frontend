import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, confirmPasswordChanged, usernameChanged, registerUser } from './../actions/AuthActions';
import { Card, Header, CardSection, Input, Button, Spinner, FruitLoader } from './';
import { Actions } from 'react-native-router-flux';

class RegistrationForm extends Component {
  onEmailChange(text) {
    console.log(text);
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    console.log(text);
    this.props.passwordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.confirmPasswordChanged(text);
  }

  onUsernameChange(text) {
    console.log(text);
    this.props.usernameChanged(text);
  }

  onButtonPress() {
    const { email, password, confirmPassword, username } = this.props;
    console.log("email:", email, "\npassword:", password, "\nconfirmPassword:", confirmPassword, "\nusername:", username);
    this.props.registerUser({ email, password, confirmPassword, username });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="email"
              placeholder="email"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="username"
              placeholder="user name"
              onChangeText={this.onUsernameChange.bind(this)}
              value={this.props.username}
            />
          </CardSection>
          <CardSection>
            <Input
              label="password"
              placeholder="password"
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <CardSection>
            <Input
              label="confirm password"
              placeholder="confirm password"
              secureTextEntry
              onChangeText={this.onConfirmPasswordChange.bind(this)}
              value={this.props.confirmPassword}
            />
          </CardSection>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Sign Up</Button>
          </CardSection>
          <CardSection>
            <Text>{this.props.errors}</Text>
          </CardSection>
        </Card>
      </View>
        );
      }
    }

    const mapStateToProps = ({ auth }) => {
      const { email, password, confirmPassword, username, error, loading } = auth;

      return { email, password, confirmPassword, error, username, loading };
    };

    export default connect(mapStateToProps, {
      emailChanged, passwordChanged, confirmPasswordChanged, usernameChanged, registerUser
    })(RegistrationForm);
