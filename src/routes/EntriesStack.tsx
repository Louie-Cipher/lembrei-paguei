import React from 'react';
import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';

export type navigationStackEntries = {
	Index: undefined;
	Contas: undefined;
	Metas: undefined;
	Gastos: undefined;
};
export type stackEntries = NativeStackNavigationProp<navigationStackEntries>;

import Index from '../screens/entries/Index';
import Contas from '../screens/entries/Contas';

const { Navigator, Screen } = createNativeStackNavigator<navigationStackEntries>();

export default () => {
	return (
		<Navigator initialRouteName='Index' screenOptions={{ headerShown: false }}>
			<Screen name='Index' component={Index} />
			<Screen name='Contas' component={Contas} />
		</Navigator>
	);
};
