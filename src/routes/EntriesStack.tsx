import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Index from 'screens/main/entries/Index';
import Contas from 'screens/main/entries/Contas';
import Gastos from 'screens/main/entries/Gastos';
import Metas from 'screens/main/entries/Metas';

export type navigationEntriesStack = {
	Index: undefined;
	Contas: undefined;
	Gastos: undefined;
	Metas: undefined;
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
			<Screen name='Contas' component={Contas} />
			<Screen name='Gastos' component={Gastos} />
			<Screen name='Metas' component={Metas} />
		</Navigator>
	);
};
