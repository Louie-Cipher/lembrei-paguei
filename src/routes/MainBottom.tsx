import React, { useEffect } from 'react';
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';

// screens
import Home from '../screens/main/Home';
import Graphics from '../screens/main/Graphics';
import AddConta from '../screens/main/AddConta';
import Settings from '../screens/main/Settings';
import Contas from '../screens/main/entries/Index';

// icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AddIcon from '../../assets/add.svg';

// navigation
type navigationBottomTabs = {
	AddConta: undefined;
	Home: { userId: string };
	Profile: { userId: string };
	Graficos: { userId: string };
	Contas: { userId: string };
};
export type mainBottom = BottomTabNavigationProp<navigationBottomTabs>;
const { Navigator, Screen } = createBottomTabNavigator<navigationBottomTabs>();

export default () => {
	const theme = useTheme();

	const [buttonColor, setButtonColor] = React.useState<string>(theme.orange);

	useEffect(() => {
		setButtonColor(theme.highContrast ? theme.background : theme.orange);
	}, [theme]);

	return (
		<Navigator
			// TODO - initialRouteName='Home'
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: theme.highContrast
						? theme.background
						: theme.quarterTone,
					// borderColor: theme.highContrast ? theme.text : theme.quarterTone,
					borderColor: '#0000',
				},
			}}
			backBehavior='initialRoute'
		>
			<Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ size }) => (
						<ButtonContainer>
							<AntDesign name='home' size={size} color={buttonColor} />
						</ButtonContainer>
					),
				}}
			/>
			<Screen
				name='Graficos'
				component={Graphics}
				options={{
					tabBarIcon: ({ size }) => (
						<ButtonContainer>
							<FontAwesome
								name='bar-chart'
								size={size}
								color={buttonColor}
							/>
						</ButtonContainer>
					),
				}}
			/>
			<Screen
				name='AddConta'
				component={AddConta}
				options={{
					tabBarIcon: ({ size }) => (
						<AddIcon
							width={size * 2.5}
							height={size * 2.5}
							style={{
								top: -10,
							}}
						/>
					),
				}}
			/>

			<Screen
				name='Contas'
				component={Contas}
				options={{
					tabBarIcon: ({ size }) => (
						<ButtonContainer>
							<FontAwesome5
								name='file-invoice-dollar'
								size={size * 0.9}
								color={buttonColor}
							/>
						</ButtonContainer>
					),
				}}
			/>

			<Screen
				name='Profile'
				component={Settings}
				options={{
					tabBarIcon: ({ size }) => (
						<ButtonContainer>
							<FontAwesome
								name='user-circle-o'
								size={size}
								color={buttonColor}
							/>
						</ButtonContainer>
					),
				}}
			/>
		</Navigator>
	);
};

const ButtonContainer = styled.View`
	padding: 10px;
	border-radius: 100px;
	background-color: ${({ theme }) => (theme.highContrast ? '#ff0' : 'transparent')};
`;
