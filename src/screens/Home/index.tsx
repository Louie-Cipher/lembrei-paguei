import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
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

				<Text style={styles.title}>Olá, {'{user}'}</Text>
				<Text style={styles.subtitle}>Seu resumo</Text>

				<Text style={styles.placeholderItem}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
					optio ipsa ducimus, laboriosam iusto cumque error reprehenderit
				</Text>

				<Text style={styles.placeholderItem}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
					optio ipsa ducimus, laboriosam iusto cumque error reprehenderit
				</Text>

				<Text style={styles.placeholderItem}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
					optio ipsa ducimus, laboriosam iusto cumque error reprehenderit
				</Text>

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
		margin: 0,
		padding: 0,
		marginTop: StatusBar.currentHeight,
	},
	title: {
		fontSize: 30,
		color: Colors.orange,
	},
	subtitle: {
		fontSize: 20,
		color: Colors.orange,
	},

	placeholderItem: {
		color: Colors.green,
		fontSize: 20,
		backgroundColor: '#0006',
		padding: 10,
		margin: 10,
		borderRadius: 10,
	},
});
