import { useState } from 'react';
import {
	Container,
	SafeArea,
	Item,
	InputName,
	TextInput,
	ConfirmButton,
	ButtonText,
} from '../styles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addEntriesStack } from 'routes/AddEntriesStack';
import { ValoresRepository } from 'db/repositories';

export default () => {
	const [valor, setValor] = useState('');

	const navigation = useNavigation<addEntriesStack>();

	const handleSaveButton = async () => {
		const repository = new ValoresRepository();
		const valorDB = await repository.findOrCreate();
		valorDB.limiteGastos = parseFloat(valor);
		repository
			.save(valorDB)
			.then(() => {
				Alert.alert('Sucesso', 'Limite salvo com sucesso', [
					{
						text: 'OK',
						onPress: () => navigation.goBack(),
					},
				]);
			})
			.catch(() => {
				Alert.alert('Erro ao salvar limite', 'Tente novamente mais tarde', [
					{
						text: 'OK',
					},
				]);
			});
	};

	return (
		<Container>
			<SafeArea>
				<Item>
					<InputName>Valor</InputName>
					<TextInput
						keyboardType='numeric'
						placeholder='Valor'
						onChangeText={setValor}
					/>
				</Item>

				<ConfirmButton onPress={handleSaveButton}>
					<ButtonText>Salvar</ButtonText>
				</ConfirmButton>
			</SafeArea>
		</Container>
	);
};
