import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import colors from '../../utils/colors';
import Logo from '../../../assets/logo.svg';
import Colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import Onboarding from '../../components/Onboarding';

export default () => {

	return (
		// <View style={styles.container}>
		// 	<View style={styles.header}>
		// 		<Logo
		// 			width={100}
		// 			height={100}
		// 			style={{ margin: 0, padding: 0, backgroundColor: '#fff0' }}
		// 		/>

		// 		<View style={styles.title}>
		// 			<Text style={[styles.titleText, { color: colors.green }]}>
		// 				Lembrei,
		// 			</Text>

		// 			<Text style={[styles.titleText, { color: colors.orange }]}>
		// 				Paguei!
		// 			</Text>
		// 		</View>
		// 	</View>

			<Onboarding />

		// 	<ExpoStatusBar style='auto' />
		// </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0a2c0e',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	safeArea: {
		flex: 1,
		backgroundColor: '#0000',
		alignItems: 'center',
		justifyContent: 'flex-end',
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
	},
	titleText: {
		fontSize: 46,
		fontWeight: 'bold',
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
