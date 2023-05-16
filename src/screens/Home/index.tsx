import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Colors from '../../utils/colors';
import Footer from '../../components/Footer';

export default function Home() {
	const navigation = useNavigation<propsStack>();

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safeArea}>
				<ExpoStatusBar style='auto' />

				<Footer />
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
	footer: {
		position: 'absolute',
		bottom: 0,
		height: 80,
		width: '100%',
	},
	footerLine: {
		height: 1,
		width: '100%',
		backgroundColor: '#0005',
		position: 'absolute',
		top: 20,
	},
	footerContent: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 30,
		margin: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	addButton: {
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 200,
	},
	addButtonGradient: {
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 200,
	},
	addButtonText: {
		margin: 0,
		padding: 0,
		fontSize: 50,
		color: Colors.white,
	},
});
