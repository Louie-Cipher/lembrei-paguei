import { useState, useEffect } from 'react';
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';

// screens
import Home from 'screens/main/Home';
import Groups from 'routes/GroupStack';
import AddEntries from 'routes/AddEntriesStack';
import Settings from 'screens/main/Settings';
import Entries from 'routes/EntriesStack';

// icons
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import AddIcon from '../assets/add.svg';

// navigation
type navigationBottomTabs = {
	AddEntry: undefined;
	Home: { userId: string };
	Profile: { userId: string };
	Groups: { userId: string };
	Entries: { userId: string };
};
export type mainBottom = BottomTabNavigationProp<navigationBottomTabs>;
const { Navigator, Screen } = createBottomTabNavigator<navigationBottomTabs>();

export default () => {
	const theme = useTheme();

	const [buttonColor, setButtonColor] = useState<string>(theme.orange);

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
						: theme.higherTone,
					// borderColor: theme.highContrast ? theme.text : theme.higherTone,
					borderColor: '#0000',
				},
				unmountOnBlur: true,
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
					unmountOnBlur: true,
				}}
			/>
			<Screen
				name='Groups'
				component={Groups}
				options={{
					tabBarIcon: ({ size }) => (
						<ButtonContainer>
							<FontAwesome name='group' size={size} color={buttonColor} />
						</ButtonContainer>
					),
				}}
			/>
			<Screen
				name='AddEntry'
				component={AddEntries}
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
				name='Entries'
				component={Entries}
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
					unmountOnBlur: true,
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
