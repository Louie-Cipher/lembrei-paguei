import { mainBottom } from '../../../routes/MainBottom';
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonsContainer, Button, ButtonText } from './styles';

export default () => {
	const navigation = useNavigation<mainBottom>();

	return (
		<Container onPress={() => navigation.goBack()}>
				<ButtonsContainer>
					<Button>
						<ButtonText>Adicionar Meta</ButtonText>
					</Button>

					<Button>
						<ButtonText>Adicionar Gasto</ButtonText>
					</Button>

					<Button>
						<ButtonText>Adicionar Conta</ButtonText>
					</Button>
				</ButtonsContainer>
		</Container>
	);
};
