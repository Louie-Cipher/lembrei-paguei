import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Colors from '../../utils/colors';
import {
	Container,
	SafeArea,
	Title,
	ButtonsContainer,
	Button,
	SocialLoginText,
} from './styles';

import GoogleLogo from '../../../assets/google-g-logo.svg';
import FacebookLogo from '../../../assets/facebook-logo.svg';

export default () => {
	const navigation = useNavigation<propsStack>();

	return (
		<Container>
			<ExpoStatusBar style='auto' />

			<SafeArea style={styles.contentArea}>
				<Title>Login ou cadastro</Title>

				<ButtonsContainer>
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
				</ButtonsContainer>
			</SafeArea>
		</Container>
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
	<Button onPress={onPress} backgroundColor={backgroundColor || Colors.white}>
		<View>{icon}</View>

		<SocialLoginText color={color || '#000'}>{text}</SocialLoginText>
	</Button>
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
	socialLoginText: {
		flex: 1,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '500',
	},
});
