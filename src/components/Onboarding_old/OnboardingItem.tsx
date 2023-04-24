import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { OnboardingItemType } from './Onboarding';
import Colors from '../../utils/colors';

export default ({ item }: { item: OnboardingItemType }) => {
	const { width } = useWindowDimensions();

	return (
		<View style={[styles.container, { width }]}>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.subtitle}>{item.description}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: `${Colors.green}50`,
		borderRadius: 10,
		margin: 10,
		padding: 10,
	},
	title: {
		color: Colors.orange,
		fontSize: 42,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
		margin: 0,
		padding: 0,
	},
	subtitle: {
		color: Colors.green,
		fontSize: 16,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 30,
	},
});
