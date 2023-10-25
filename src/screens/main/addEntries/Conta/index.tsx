import { useEffect, useState } from 'react';
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
	Switch,
	SpaceBetween,
} from '../styles';
import DateTimePicker, {
	DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import { Alert, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addEntriesStack, AddContaRouteProp } from 'routes/AddEntriesStack';
import { ContaRepository } from 'db/repositories';
import { dateToString } from 'utils/date';
import { Conta } from 'db/entities';

export default () => {
	const [contaDb, setContaDb] = useState<Conta | undefined>(undefined);
	const [nome, setNome] = useState('');
	const [categoria, setCategoria] = useState('');
	const [valor, setValor] = useState('');
	const [dataVencimento, setDataPagamento] = useState(new Date());
	const [dataPagamento, setDataVencimento] = useState(new Date());

	const navigation = useNavigation<addEntriesStack>();
	const route = useRoute<AddContaRouteProp>();

	useEffect(() => {
		if (!route.params?.conta) return;

		const conta = route.params.conta;
		setContaDb(conta);

		setNome(conta.nome);
		setCategoria(conta.categoria);
		setValor(String(conta.valor));
		setDataVencimento(conta.dataVencimento as Date);
		if (conta.dataPagamento) setDataPagamento(conta.dataPagamento as Date);
	}, []);

	const handleDateButton = (date: Date, setDate: (date: Date) => void) =>
		DateTimePickerAndroid.open({
			value: date,
			mode: 'date',
			display: 'default',
			onChange: (_, newDate) => setDate(newDate || date),
		});

	const handleSaveButton = async () => {
		try {
			const newConta = contaDb ? contaDb : new Conta();

			newConta.nome = nome;
			newConta.categoria = categoria;
			newConta.valor = Number(valor);
			newConta.dataVencimento = dataVencimento;
			newConta.dataPagamento = dataPagamento;
			await ContaRepository.save(newConta);

			Alert.alert('Sucesso', 'Gasto salvo com sucesso', [
				{
					text: 'OK',
					onPress: () => navigation.goBack(),
				},
			]);
		} catch {
			Alert.alert('Erro ao salvar gasto', 'Tente novamente mais tarde', [
				{
					text: 'OK',
				},
			]);
		}
	};

	return (
		<Container>
			<SafeArea>
				<Item>
					<InputName>Nome da conta</InputName>
					<TextInput value={nome} onChangeText={setNome} />
				</Item>

				<Item>
					<InputName>Categoria</InputName>
					<TextInput value={categoria} onChangeText={setCategoria} />
				</Item>

				<Item>
					<InputName>Valor</InputName>
					<TextInput
						keyboardType='numeric'
						placeholder='R$'
						placeholderTextColor='#888888'
						value={valor}
						onChangeText={setValor}
					/>
				</Item>

				<DateItemContainer
					title='Data de vencimento'
					date={dataVencimento}
					setDate={setDataVencimento}
				/>

				<DateItemContainer
					title='Data de pagamento'
					date={dataPagamento}
					setDate={setDataPagamento}
					toggle
				/>

				<ConfirmButton onPress={handleSaveButton}>
					<ButtonText>Salvar</ButtonText>
				</ConfirmButton>
			</SafeArea>
		</Container>
	);
};

interface DateItemContainerProps {
	title: string;
	date: Date;
	setDate: (date: Date) => void;
	toggle?: true | undefined;
}
const DateItemContainer = ({ title, date, setDate, toggle }: DateItemContainerProps) => {
	const [show, setShow] = useState(false);

	const handleDateButton = () =>
		DateTimePickerAndroid.open({
			value: date,
			mode: 'date',
			display: 'default',
			onChange: (_, newDate) => setDate(newDate || date),
		});

	return (
		<DateItem>
			{toggle && (
				<SpaceBetween>
					<ButtonText>Pago</ButtonText>
					<Switch
						thumbColor='#fff'
						trackColor={{ false: '#f00', true: '#0f0' }}
						onValueChange={() => setShow(!show)}
						value={show}
					/>
				</SpaceBetween>
			)}
			<InputName>{title}</InputName>
			{show ? (
				<>
					{Platform.OS === 'android' ? (
						<DateButton onPress={handleDateButton}>
							<ButtonText>{dateToString(date)}</ButtonText>
						</DateButton>
					) : (
						<DateTimePicker
							value={date}
							mode='date'
							display='default'
							onChange={(_, newDate) => setDate(newDate || date)}
						/>
					)}
				</>
			) : (
				<></>
			)}
		</DateItem>
	);
};
