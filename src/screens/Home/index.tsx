import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Colors from '../../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
	const navigation = useNavigation<propsStack>();
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safeArea}>
				<ExpoStatusBar style='auto' />

				<View style={styles.title}>
					<Text style={[styles.titleText, { color: Colors.green }]}>
						Lembrei,
					</Text>
					<Text style={[styles.titleText, { color: Colors.orange }]}>
						Paguei!
					</Text>
				</View>
				<Text style={styles.subtitle}>
					Economize dinheiro.{'\n'} atinja seus objetivos.
				</Text>

				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate('Welcome')}
					>
						<LinearGradient
							colors={[Colors.green, Colors.orange]}
							style={styles.button}
							start={{ x: 0, y: 0.9 }}
							end={{ x: 1, y: 0 }}
						>
							<Text style={styles.buttonText}>Começar</Text>
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate('Login')}
					>
						<Text style={styles.buttonText}>Já tenho uma conta</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	safeArea: {
		flex: 1,
		backgroundColor: '#0000',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: StatusBar.currentHeight,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 25,
	},
	title: {
		marginLeft: 10,
		flexDirection: 'column',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 46,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 2,
		margin: 0,
		marginBottom: -15,
		padding: 0,
	},
	subtitle: {
		fontSize: 16,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 30,
	},
	buttonsContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#fff',
		width: 250,
		borderRadius: 10,
		paddingVertical: 15,
		paddingHorizontal: 30,
		marginVertical: 10,
		alignItems: 'center',
	},
	buttonText: {
		color: '#0a2c0e',
		fontSize: 16,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});
