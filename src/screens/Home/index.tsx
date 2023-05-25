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
});
