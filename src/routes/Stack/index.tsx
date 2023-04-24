import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './Models';

import Home from '../../screens/Home';
import Register from '../../screens/Register';
import Login from '../../screens/Login';
import Welcome from '../../screens/Welcome';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default () => {
	return (
		<Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='Home' component={Home} />
			<Screen name='Register' component={Register} />
			<Screen name='Login' component={Login} />
		</Navigator>
	);
};
