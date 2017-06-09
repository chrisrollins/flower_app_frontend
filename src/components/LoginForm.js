import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './../actions/AuthActions';
import { Card, Header, CardSection, Input, Button, Spinner, FruitLoader } from './';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password }); // Action
  }

  register() {
    Actions.regPage();
  }

  renderButton() {
    if (this.props.loading) {
      return <FruitLoader size="medium" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
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
              label="password"
              placeholder="password"
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this)}
            >
                Login
              </Button>
            </CardSection>
            <CardSection>
              <Text>{this.props.errors}</Text>
            </CardSection>
            <CardSection>
              <Button
                onPress={this.register.bind(this)}
              >
                  Create Account
                </Button>
              </CardSection>
            </Card>
          </View>
        );
      }
    }

    const mapStateToProps = ({ auth }) => {
      const { email, password, error, loading } = auth;

      return { email, password, error, loading };
    };

    export default connect(mapStateToProps, {
      emailChanged, passwordChanged, loginUser
    })(LoginForm);
