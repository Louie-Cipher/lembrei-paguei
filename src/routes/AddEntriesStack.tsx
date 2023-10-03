import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Index from 'screens/main/addEntries/Index';
import Contas from 'screens/main/addEntries/Conta';
import Gastos from 'screens/main/addEntries/Gasto';
import Metas from 'screens/main/addEntries/Meta';
import GastoLimit from 'screens/main/addEntries/GastoLimit';

export type navigationAddEntriesStack = {
	Index: undefined;
	AddConta: undefined;
	AddGasto: undefined;
	AddMeta: undefined;
	SetGastoLimit: undefined;
};
export type addEntriesStack = NativeStackNavigationProp<navigationAddEntriesStack>;

const { Navigator, Screen } = createNativeStackNavigator<navigationAddEntriesStack>();

export default () => {
	return (
		<Navigator
			initialRouteName='Index'
			screenOptions={{ headerShown: false, animation: 'none' }}
		>
			<Screen name='Index' component={Index} />
			<Screen name='AddConta' component={Contas} />
			<Screen name='AddGasto' component={Gastos} />
			<Screen name='AddMeta' component={Metas} />
			<Screen name='SetGastoLimit' component={GastoLimit} />
		</Navigator>
	);
};
