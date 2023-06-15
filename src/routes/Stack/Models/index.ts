import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
	Welcome: undefined;
	Login: undefined;
	LoggedRoutes: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
