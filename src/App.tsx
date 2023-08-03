import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from './theme';
import Route from './routes';

export default () => {
	const systemTheme = useColorScheme();

	return (
		<ThemeProvider theme={systemTheme === 'dark' ? themes.dark : themes.light}>
			<Route />
		</ThemeProvider>
	);
};
