import { propsBottom } from '../../routes/Bottom/Models';
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonsContainer, Button, ButtonText } from './styles';

export default () => {
	const navigation = useNavigation<propsBottom>();

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
