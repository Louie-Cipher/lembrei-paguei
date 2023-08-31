import React from 'react';
import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type navigationRootStack = {
	Welcome: undefined;
	Login: undefined;
	LoggedRoutes: undefined;
};
export type rootStack = NativeStackNavigationProp<navigationRootStack>;

import Login from '../screens/unlogged/Login';
import Welcome from '../screens/unlogged/Welcome';
import LoggedRoutes from './MainBottom';

const { Navigator, Screen } = createNativeStackNavigator<navigationRootStack>();

export default () => {
	return (
		<Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='Login' component={Login} />
			<Screen name='LoggedRoutes' component={LoggedRoutes} />
		</Navigator>
	);
};
