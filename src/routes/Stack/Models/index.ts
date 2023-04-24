import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
	Welcome: undefined;
	Home: undefined;
	Register: undefined;
	Login: undefined;
	Profile?: {
		userId: string;
	};
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
