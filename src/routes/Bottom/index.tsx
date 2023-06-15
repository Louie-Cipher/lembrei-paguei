import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { propsNavigationBottomTabs } from './Models';
import colors from '../../utils/colors';

// screens
import Home from '../../screens/Home';
import Graphics from '../../screens/Graphics';
import AddConta from '../../screens/AddConta';

// icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AddIcon from '../../../assets/add.svg';

const { Navigator, Screen } = createBottomTabNavigator<propsNavigationBottomTabs>();

export default () => {
	return (
		<Navigator
			initialRouteName='Home'
			screenOptions={{ headerShown: false, tabBarShowLabel: false }}
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
							width={size * 2}
							height={size * 2}
							style={styles.addButton}
						/>
					),
				}}
			/>
			<Screen
				name='Profile'
				component={Home}
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
	addButton: {
		position: 'absolute',
		bottom: 10,
	},
});
