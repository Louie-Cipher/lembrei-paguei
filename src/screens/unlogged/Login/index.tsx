import { View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../routes/Stack/Models';
import { StatusBar } from 'expo-status-bar';
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
			<StatusBar style='auto' />

			<SafeArea>
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
	<Button onPress={onPress} backgroundColor={backgroundColor || '#fff'}>
		<View>{icon}</View>
		<SocialLoginText color={color || '#000'}>{text}</SocialLoginText>
	</Button>
);
