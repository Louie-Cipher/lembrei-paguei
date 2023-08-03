import { Text } from 'react-native';
import { View } from 'react-native';
import Footer from '../../components/Footer';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import colors from '../../utils/colors';

export default function Home() {
	const navigation = useNavigation<propsStack>();

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
