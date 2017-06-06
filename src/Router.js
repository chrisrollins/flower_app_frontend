import React from 'react';
import { View } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }} title="Hanagatchi" >
			<Scene key="dashboard" component={ Dashboard } initial />
			<Scene key="login" component={ LoginForm } title="Please Login" />
		</Router>
	);
};

export default RouterComponent;