import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Image,
	TouchableOpacity,
} from 'react-native';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import Onboarding from '../../components/Onboarding';

import LogoSvg from '../../../assets/pig-logo.svg';

export default () => {
	const navigation = useNavigation<propsStack>();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				{/* <LogoSvg
					width={100}
					height={100}
					style={{ margin: 0, padding: 0 }}
				/> */}

				<Image
					source={require('../../../assets/logo.png')}
					style={{ width: 100, height: 100, margin: 0, padding: 0 }}
				/>

				<View style={styles.title}>
					<Text style={[styles.titleText, { color: colors.green }]}>
						Lembrei,
					</Text>

					<Text style={[styles.titleText, { color: colors.orange }]}>
						Paguei!
					</Text>
				</View>

				<Text style={styles.subtitle}>
					Economize dinheiro,{'\n'}atinja seus objetivos!
				</Text>
			</View>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Login')}
			>
				<Text style={styles.buttonText}>Começar</Text>
			</TouchableOpacity>

			<ExpoStatusBar style='auto' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	safeArea: {
		flex: 1,
		backgroundColor: '#0000',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginTop: StatusBar.currentHeight,
	},
	header: {
		flexDirection: 'column',
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
		fontWeight: '900',
		textTransform: 'uppercase',
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
	nextButton: {
		backgroundColor: colors.green,
		borderRadius: 50,
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: colors.green,
		marginTop: 20,
		borderRadius: 20,
		paddingVertical: 10,
		width: 200,
	},
	buttonText: {
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
