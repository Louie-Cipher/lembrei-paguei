import { View, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function Home() {

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safeArea}>
				<ExpoStatusBar style='auto' />
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		margin: 0,
		padding: 0,
	},
	safeArea: {
		flex: 1,
		backgroundColor: '#0000',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0,
		padding: 0,
		marginTop: StatusBar.currentHeight,
	},
});
