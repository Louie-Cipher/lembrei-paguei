import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Index from 'screens/main/groups/Index';
import Group from 'screens/main/groups/Group';

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
