import React from 'react';
import { View } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }} title="Hanagatchi" >
			<Scene key="dashboard" component={ Dashboard } type={ ActionConst.RESET }/>
			<Scene key="regPage" component={ RegistrationForm } title="Registration" />
			<Scene key="login" component={ LoginForm } title="Please Login" initial />
		</Router>
	);
};

export default RouterComponent;