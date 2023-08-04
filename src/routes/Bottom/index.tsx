import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { propsNavigationBottomTabs } from './Models';
import colors from '../../utils/colors';

// screens
import Home from '../../screens/Home';
import Graphics from '../../screens/Graphics';
import AddConta from '../../screens/AddConta';
import Settings from '../../screens/Settings';
import Contas from '../../screens/Contas';

// icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AddIcon from '../../../assets/add.svg';
import MoneyBillIcon from '../../../assets/money_bill.svg';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator<propsNavigationBottomTabs>();

export default () => {
	const theme = useTheme();

	return (
		<Navigator
			// TODO - initialRouteName='Home'
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: theme.quarterTone,
					borderTopColor: theme.quarterTone,
				},
			}}
			backBehavior='initialRoute'
		>
			<Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<AntDesign name='home' size={size} color={colors.orange} />
					),
				}}
			/>
			<Screen
				name='Graficos'
				component={Graphics}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome name='bar-chart' size={size} color={colors.orange} />
					),
				}}
			/>
			<Screen
				name='AddConta'
				component={AddConta}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
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
					tabBarIcon: ({ focused, color, size }) => (
						<MoneyBillIcon
							width={size}
							height={size}
							fill={colors.orange}
							style={styles.button}
						/>
					),
				}}
			/>

			<Screen
				name='Profile'
				component={Settings}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome
							name='user-circle-o'
							size={size}
							color={colors.orange}
						/>
					),
				}}
			/>
		</Navigator>
	);
};

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: 10,
	},
});
