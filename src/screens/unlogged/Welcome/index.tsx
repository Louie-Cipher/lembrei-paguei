import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { rootStack } from '../../../routes/RootStack';
import {
	Container,
	SafeAreaView,
	TitleContainer,
	TitleText,
	SubtitleText,
	NextButton,
	NextButtonText,
} from './styles';
import { useTheme } from 'styled-components';

export default () => {
	const navigation = useNavigation<rootStack>();
	const theme = useTheme();

	return (
		<Container>
			<SafeAreaView>
				<Image
					source={require('../../../../assets/logo.png')}
					style={{ width: 100, height: 100, margin: 0, padding: 0 }}
				/>

				<TitleContainer>
					<TitleText color={theme.orange}>Lembrei,</TitleText>
					<TitleText color={theme.green}>Paguei!</TitleText>
				</TitleContainer>

				<SubtitleText>
					Economize dinheiro,{'\n'}atinja seus objetivos!
				</SubtitleText>
				<NextButton onPress={() => navigation.navigate('Login')}>
					<NextButtonText>Começar</NextButtonText>
				</NextButton>

				<ExpoStatusBar style='auto' />
			</SafeAreaView>
		</Container>
	);
};
