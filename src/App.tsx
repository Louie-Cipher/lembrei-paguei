import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from './theme';
import Route from './routes';
import { DB } from './db';

export default () => {
	const systemTheme = useColorScheme();

	useEffect(() => {
		DB.initialize();
	}, []);

	return (
		<ThemeProvider theme={systemTheme === 'dark' ? themes.dark : themes.light}>
			{/* <ThemeProvider theme={themes.highContrast}> */}
			<Route />
		</ThemeProvider>
	);
};
