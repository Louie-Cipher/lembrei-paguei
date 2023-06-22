import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationBottomTabs = {
	AddConta: undefined;
	Home: { userId: string };
	Profile: { userId: string };
	Graficos: { userId: string };
	Contas: { userId: string };
};

export type propsBottom = NativeStackNavigationProp<propsNavigationBottomTabs>;
