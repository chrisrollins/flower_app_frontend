import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import { View, Text } from 'react-native';
// import { Header, Card, CardSection, Input, Button } from './components/common';
import reducers from './reducers';
import LoginForm from './components';

import ax from './config/axiosSetup';

class App extends Component {

  state = {
    email: '',
    password: '',
    errors: ''
  } //end of state

  componentDidMount() {
    console.log('loaded');
  } // end of componentWillMount

  buttonPress() {

  }

  checkLogin() {
    ax.get('session')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
      );
    } // end of Render
  } // end of App

  export default App;
