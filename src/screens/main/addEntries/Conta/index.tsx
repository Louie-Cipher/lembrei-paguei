import { useState } from 'react';
import {
	Container,
	SafeArea,
	Item,
	InputName,
	TextInput,
	DateButton,
	ConfirmButton,
	ButtonText,
	DateItem,
} from '../styles';
import DateTimePicker, {
	DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addEntriesStack } from 'routes/AddEntriesStack';
import { ContaRepository } from 'db/repositories';
import { dateToString } from 'utils/date';

export default () => {
	const [nome, setNome] = useState('');
	const [categoria, setCategoria] = useState('');
	const [valor, setValor] = useState('');
	const [data, setData] = useState(new Date());

	const navigation = useNavigation<addEntriesStack>();

	const handleDateButton = () =>
		DateTimePickerAndroid.open({
			value: data,
			mode: 'date',
			display: 'default',
			onChange: (_, newDate) => {
				setData(newDate || data);
			},
		});
	const handleSaveButton = async () => {
		ContaRepository.save({
			nome,
			categoria,
			valor: Number(valor),
			data,
		})
			.then(() => {
				Alert.alert('Sucesso', 'Gasto salvo com sucesso', [
					{
						text: 'OK',
						onPress: () => navigation.goBack(),
					},
				]);
			})
			.catch(() => {
				Alert.alert('Erro ao salvar gasto', 'Tente novamente mais tarde', [
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
					<InputName>Nome da conta</InputName>
					<TextInput onChangeText={setNome} />
				</Item>

				<Item>
					<InputName>Categoria</InputName>
					<TextInput onChangeText={setCategoria} />
				</Item>

				<Item>
					<InputName>Valor</InputName>
					<TextInput
						keyboardType='numeric'
						placeholder='R$'
						placeholderTextColor='#888888'
						onChangeText={setValor}
					/>
				</Item>

				<DateItem>
					<InputName>Data de vencimento</InputName>
					{Platform.OS === 'android' ? (
						<DateButton onPress={handleDateButton}>
							<ButtonText>
								{dateToString(data)}
							</ButtonText>
						</DateButton>
					) : (
						<DateTimePicker
							value={data}
							mode='date'
							display='default'
							onChange={(_, newDate) => setData(newDate || data)}
						/>
					)}
				</DateItem>

				<ConfirmButton onPress={handleSaveButton}>
					<ButtonText>Salvar</ButtonText>
				</ConfirmButton>
			</SafeArea>
		</Container>
	);
};
