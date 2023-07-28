import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Colors from '../../utils/colors';

import GoogleLogo from '../../../assets/google-g-logo.svg';
import FacebookLogo from '../../../assets/facebook-logo.svg';

export default () => {
	const navigation = useNavigation<propsStack>();

	return (
		<SafeAreaView style={styles.container}>
			<ExpoStatusBar style='auto' />

			<View style={styles.contentArea}>
				<Text style={styles.title}>Login ou cadastro</Text>

				<View style={styles.buttonsContainer}>
					<SocialLoginButton
						onPress={() => navigation.navigate('LoggedRoutes')}
						text='Entrar com Google'
						icon={<GoogleLogo width={30} height={30} />}
					/>

					<SocialLoginButton
						onPress={() => navigation.navigate('LoggedRoutes')}
						text='Entrar com Facebook'
						icon={<FacebookLogo width={30} height={30} />}
						color='#fff'
						backgroundColor='#1977f3'
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

interface SocialLoginButtonProps {
	onPress: () => void;
	text: string;
	icon: JSX.Element;
	color?: string;
	backgroundColor?: string;
}
const SocialLoginButton = ({
	onPress,
	text,
	icon,
	color,
	backgroundColor,
}: SocialLoginButtonProps) => (
	<TouchableOpacity
		onPress={onPress}
		style={[
			styles.socialLoginButton,
			{ backgroundColor: backgroundColor || Colors.white },
		]}
	>
		<View style={styles.socialLoginIcon}>{icon}</View>

		<Text style={[styles.socialLoginText, { color: color || '#000' }]}>{text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.white,
		alignItems: 'center',
	},
	contentArea: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	buttonsContainer: {
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialLoginButton: {
		width: '80%',
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 50,
		shadowColor: '#000',
		shadowRadius: 5,
		elevation: 5,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	socialLoginIcon: {},
	socialLoginText: {
		flex: 1,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '500',
	},
});
