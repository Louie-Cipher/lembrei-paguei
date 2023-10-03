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
import { addEntriesStack } from 'routes/AddEntriesStack';
import { useNavigation } from '@react-navigation/native';
import { MetaRepository } from 'db/repositories';

export default () => {
	const [nome, setNome] = useState('');
	const [valorAtual, setValorAtual] = useState('');
	const [valorTotal, setValorTotal] = useState('');

	const navigation = useNavigation<addEntriesStack>();

	const handleSaveButton = async () => {
		const valorAtualNum = Number(valorAtual);
		const valorTotalNum = Number(valorTotal);

		let msgBytes = 0x0;
		if (isNaN(valorAtualNum)) msgBytes |= 0x2;
		if (isNaN(valorTotalNum)) msgBytes |= 0x4;

		if (msgBytes !== 0x0)
			return Alert.alert(
				'Erro ao salvar meta',
				`Valor ${msgBytes & 0x2 ? 'atual' : ''}${msgBytes & 0x6 ? ' e ' : ''}${
					msgBytes & 0x4 ? 'total' : ''
				} inválido`,
				[
					{
						text: 'OK',
					},
				]
			);

		MetaRepository.save({
			nome,
			valor: valorAtualNum,
			valorTotal: valorTotalNum,
			valorAtual: valorAtualNum,
		})
			.then(() => {
				Alert.alert('Sucesso', 'Meta salva com sucesso', [
					{
						text: 'OK',
						onPress: () => navigation.goBack(),
					},
				]);
			})
			.catch((err) => {
				console.log(err);
				Alert.alert('Erro ao salvar meta', 'Tente novamente mais tarde', [
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
					<InputName>Nome da meta</InputName>
					<TextInput
						placeholder='Nome'
						placeholderTextColor='#888888'
						onChangeText={setNome}
					/>
				</Item>

				<Item>
					<InputName>Valor Final</InputName>
					<TextInput
						keyboardType='numeric'
						placeholder='R$'
						placeholderTextColor='#888888'
						onChangeText={setValorTotal}
					/>
				</Item>

				<Item>
					<InputName>Valor Atual</InputName>
					<TextInput
						keyboardType='numeric'
						placeholder='R$'
						placeholderTextColor='#888888'
						onChangeText={setValorAtual}
					/>
				</Item>

				<ConfirmButton onPress={handleSaveButton}>
					<ButtonText>Salvar</ButtonText>
				</ConfirmButton>
			</SafeArea>
		</Container>
	);
};
