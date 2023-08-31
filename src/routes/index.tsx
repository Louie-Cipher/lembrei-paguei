import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

export default () => {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
};
