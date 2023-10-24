import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Index from 'groupsScreen/Index';
import Group from 'groupsScreen/Group';

export type navigationEntriesStack = {
	Index: undefined;
	Group: { id: number };
};
export type entriesStack = NativeStackNavigationProp<navigationEntriesStack>;

const { Navigator, Screen } = createNativeStackNavigator<navigationEntriesStack>();

export default () => {
	return (
		<Navigator
			initialRouteName='Index'
			screenOptions={{ headerShown: false, animation: 'none' }}
		>
			<Screen name='Index' component={Index} />
			<Screen name='Group' component={Group} />
		</Navigator>
	);
};
