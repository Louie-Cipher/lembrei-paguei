import { Alert, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { rootStack } from 'routes/RootStack';
import { StatusBar } from 'expo-status-bar';
import auth from '@react-native-firebase/auth';
import {
	GoogleSignin,
	GoogleSigninButton,
	User,
	statusCodes,
} from '@react-native-google-signin/google-signin';
import {
	Container,
	SafeArea,
	Title,
	ButtonsContainer,
	Button,
	SocialLoginText,
} from './styles';

import FacebookLogo from 'assets/facebook-logo.svg';
import googleServices from '@root/google-services.json';

export default () => {
	const navigation = useNavigation<rootStack>();

	const [loginError, setLoginError] = useState<typeof statusCodes>();
	const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

	useEffect(() => {
		GoogleSignin.configure({
			webClientId: googleServices.client[0].oauth_client[0].client_id,
		});
	}, []);

	const googleSignIn = async () => {
		try {
			await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
			const userInfo = await GoogleSignin.signIn();

			const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);

			const authorization = await auth().signInWithCredential(googleCredential);

			if (authorization.user) {
				navigation.navigate('LoggedRoutes');
			}
		} catch (error: any) {
			setLoginError(error.code as typeof statusCodes);

			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (e.g. sign in) is in progress already

				setButtonDisabled(true);
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated

				setButtonDisabled(true);
			} else {
				console.log(error);
			}
		}
	};
	return (
		<Container>
			<StatusBar style='auto' />

			<SafeArea>
				<Title>Login ou cadastro</Title>

				<ButtonsContainer>
					<GoogleSigninButton
						onPress={googleSignIn}
						disabled={buttonDisabled}
						size={GoogleSigninButton.Size.Wide}
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
	<Button onPress={onPress} backgroundColor={backgroundColor || '#fff'}>
		<View>{icon}</View>
		<SocialLoginText color={color || '#000'}>{text}</SocialLoginText>
	</Button>
);
