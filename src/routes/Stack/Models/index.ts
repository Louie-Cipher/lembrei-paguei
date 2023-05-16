import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
	Welcome: undefined;
	Login: undefined;
	AddConta: undefined;
	Home: { userId: string };
	Profile: { userId: string };
	Graficos: { userId: string };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
