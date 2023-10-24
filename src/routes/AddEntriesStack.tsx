import { RouteProp} from '@react-navigation/native';
import {
	NativeStackNavigationProp,
	createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Index from 'addEntriesScreen/Index';
import Contas from 'addEntriesScreen/Conta';
import Gastos from 'addEntriesScreen/Gasto';
import Metas from 'addEntriesScreen/Meta';
import GastoLimit from 'addEntriesScreen/GastoLimit';
import { Conta, Gasto, Meta } from 'db/entities';

export type navigationAddEntriesStack = {
	Index: undefined;
	AddConta: { conta?: Conta };
	AddGasto: { gasto?: Gasto };
	AddMeta: { meta?: Meta };
	SetGastoLimit: undefined;
};
export type addEntriesStack = NativeStackNavigationProp<navigationAddEntriesStack>;

export type AddContaRouteProp = RouteProp<navigationAddEntriesStack, 'AddConta'>;
export type AddGastoRouteProp = RouteProp<navigationAddEntriesStack, 'AddGasto'>;
export type AddMetaRouteProp = RouteProp<navigationAddEntriesStack, 'AddMeta'>;

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
