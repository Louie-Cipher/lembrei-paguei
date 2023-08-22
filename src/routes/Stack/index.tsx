import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './Models';

import Login from '../../screens/unlogged/Login';
import Welcome from '../../screens/unlogged/Welcome';
import LoggedRoutes from '../Bottom';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default () => {
	return (
		<Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='Login' component={Login} />
			<Screen name='LoggedRoutes' component={LoggedRoutes} />
		</Navigator>
	);
};
