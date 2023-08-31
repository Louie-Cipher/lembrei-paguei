import { useNavigation } from '@react-navigation/native';
import { stackEntries } from '../../../../routes/EntriesStack';
import { Button, ButtonText, Container, SafeArea } from './styles';

export default () => {
	const navigation = useNavigation<stackEntries>();

	return (
		<Container>
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
		</Container>
	);
};
