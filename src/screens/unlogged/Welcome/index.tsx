import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import colors from '../../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../routes/Stack/Models';
import {
	Container,
	SafeAreaView,
	TitleContainer,
	TitleText,
	SubtitleText,
	NextButton,
	NextButtonText,
} from './styles';

export default () => {
	const navigation = useNavigation<propsStack>();

	return (
		<Container>
			<SafeAreaView>
				<Image
					source={require('../../../assets/logo.png')}
					style={{ width: 100, height: 100, margin: 0, padding: 0 }}
				/>

				<TitleContainer>
					<TitleText color={colors.orange}>Lembrei,</TitleText>
					<TitleText color={colors.green}>Paguei!</TitleText>
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
