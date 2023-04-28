import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
	Welcome: undefined;
	Register: undefined;
	Login: undefined;
	AddConta: undefined;
	Home: {
		userId: string;
	}
	Profile?: {
		userId: string;
	};
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
