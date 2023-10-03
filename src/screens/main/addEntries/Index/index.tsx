import { addEntriesStack } from 'routes/AddEntriesStack';
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonsContainer, Button, ButtonText } from './styles';
import CirclesBackground from 'components/CirclesBackground';

export default () => {
	const navigation = useNavigation<addEntriesStack>();

	return (
		<CirclesBackground>
			<Container onPress={() => navigation.goBack()}>
				<ButtonsContainer>

					<Button onPress={() => navigation.navigate('SetGastoLimit')}>
						<ButtonText style={{ fontSize: 15 }}>
							Limite de Gastos
						</ButtonText>
					</Button>

					<Button onPress={() => navigation.navigate('AddMeta')}>
						<ButtonText>Adicionar Meta</ButtonText>
					</Button>

					<Button onPress={() => navigation.navigate('AddGasto')}>
						<ButtonText>Adicionar Gasto</ButtonText>
					</Button>

					<Button onPress={() => navigation.navigate('AddConta')}>
						<ButtonText>Adicionar Conta</ButtonText>
					</Button>
				</ButtonsContainer>
			</Container>
		</CirclesBackground>
	);
};
