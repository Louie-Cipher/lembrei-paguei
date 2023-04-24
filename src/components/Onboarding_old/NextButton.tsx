import { StyleSheet } from 'react-native';
import { View } from 'react-native';

interface NextButtonProps {}

export default ({}: NextButtonProps) => {
	return <View></View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
