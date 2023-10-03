import { useNavigation } from '@react-navigation/native';
import { entriesStack } from 'routes/EntriesStack';
import CirclesBackground from 'components/CirclesBackground';
import { Button, ButtonText, SafeArea } from './styles';

export default () => {
	const navigation = useNavigation<entriesStack>();

	return (
		<CirclesBackground style={{ justifyContent: 'flex-end' }}>
			<SafeArea>
				<Button onPress={() => navigation.navigate('Contas')}>
					<ButtonText>Contas</ButtonText>
				</Button>

				<Button onPress={() => navigation.navigate('Metas')}>
					<ButtonText>Metas</ButtonText>
				</Button>

				<Button onPress={() => navigation.navigate('Gastos')}>
					<ButtonText>Gastos</ButtonText>
				</Button>
			</SafeArea>
		</CirclesBackground>
	);
};
