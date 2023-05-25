import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './Models';

import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Welcome from '../../screens/Welcome';
import Graphics from '../../screens/Graphics';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default () => {
	return (
		<Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='Home' component={Home} />
			<Screen name='Login' component={Login} />
			<Screen name='Graficos' component={Graphics} />
		</Navigator>
	);
};
