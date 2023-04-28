import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Colors from '../../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

interface propsHome {}

export default function Home() {
	const navigation = useNavigation<propsStack>();

	const handleAddButton = () => {
		navigation.navigate('AddConta');
	};

	const handleUserButton = () => {
		navigation.navigate('Profile', { userId: '1' });
	};

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safeArea}>
				<ExpoStatusBar style='auto' />

				<View style={styles.footer}>
					<View style={styles.footerLine} />
					<View style={styles.footerContent}>
						<TouchableOpacity onPress={handleAddButton}>
							<LinearGradient
								colors={[Colors.green, Colors.orange]}
								start={{ x: 0, y: 0 }}
								end={{ x: 0.8, y: 1 }}
								style={styles.addButtonGradient}
							>
								<Text style={styles.addButtonText}>+</Text>
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleUserButton}>
							<FontAwesome name='user-circle-o' size={40} color='black' />
						</TouchableOpacity>
					</View>
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
