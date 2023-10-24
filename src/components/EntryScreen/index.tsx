import { Repository } from 'typeorm/browser';
import { Conta, Gasto, Meta } from 'db/entities';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { entriesStack } from '@/routes/EntriesStack';
import { addEntriesStack } from '@/routes/AddEntriesStack';
import { Alert } from 'react-native';
import CirclesBackground from '../CirclesBackground';
import { SafeArea, Title } from './styles';
import LinePercentItem from '../LinePercentItem';
import SimpleValueItem from '../SimpleValueItem';
import { numberToReal } from 'utils/number';
import { dbDateString } from 'utils/date';

interface EntryScreenProps {
	title: string;
	repository: Repository<Conta> | Repository<Gasto> | Repository<Meta>;
}
export default ({ title, repository }: EntryScreenProps) => {
	const [entries, setEntries] = useState<Conta[] | Gasto[] | Meta[]>([]);

	const entriesNavigation = useNavigation<entriesStack>();
	const addEntryNavigation = useNavigation<addEntriesStack>();

	const fetchEntries = async () => {
		const entriesDB = await repository.find();
		setEntries(entriesDB || []);
	};

	useEffect(() => {
		fetchEntries();
	}, []);

	const deleteEntry = (id: number) => {
		const onPress = () => {
			repository
				.delete(id)
				.then(() => Alert.alert('Excluído com sucesso'))
				.catch(() =>
					Alert.alert('Erro ao excluir', 'Tente novamente mais tarde')
				);
			fetchEntries();
		};

		Alert.alert('Excluir', 'Você tem certeza que deseja excluir?', [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Excluir',
				style: 'destructive',
				onPress,
			},
		]);
	};

	const editConta = (conta: Conta) =>
		addEntryNavigation.navigate('AddConta', { conta });

	const editGasto = (gasto: Gasto) =>
		addEntryNavigation.navigate('AddGasto', { gasto });

	const editMeta = (meta: Meta) =>
		addEntryNavigation.navigate('AddMeta', { meta });

	const RenderMeta = ({ meta }: { meta: Meta }) => (
		<LinePercentItem
			title={meta.nome}
			currentLabel='Valor Atual'
			currentValue={meta.valorAtual}
			totalLabel='Valor Total'
			totalValue={meta.valorTotal}
			isExceedGood
			
		/>
	);

	const RenderGasto = ({ gasto }: { gasto: Gasto }) => (
		<SimpleValueItem
			title={gasto.nome}
			onEditButton={() => editGasto(gasto)}
			onDeleteButton={() => deleteEntry(gasto.id)}
			values={[
				{ key: 'Categoria', value: gasto.categoria },
				{ key: 'Valor', value: numberToReal(gasto.valor) },
				{
					key: 'Data',
					value: dbDateString(gasto.data as string),
				},
			]}
		/>
	);

	const RenderConta = ({ conta }: { conta: Conta }) => (
		<SimpleValueItem
			title={conta.nome}
			onEditButton={() => editConta(conta)}
			onDeleteButton={() => deleteEntry(conta.id)}
			values={[
				{ key: 'Categoria', value: conta.categoria },
				{ key: 'Valor', value: numberToReal(conta.valor) },
				{
					key: 'Data de Vencimento',
					value: dbDateString(conta.dataVencimento as string),
				},
				{
					key: 'Data de Pagamento',
					value: conta.dataPagamento
						? dbDateString(conta.dataPagamento as string)
						: 'pendente',
				},
			]}
		/>
	);

	return (
		<CirclesBackground>
			<SafeArea>
				<Title>{title}</Title>

				{entries.map((entry) => {
					if ('valorTotal' in entry)
						return <RenderMeta meta={entry} key={entry.id} />;
					else if ('data' in entry)
						return <RenderGasto gasto={entry} key={entry.id} />;
					else if ('dataVencimento' in entry)
						return <RenderConta conta={entry} key={entry.id} />;
				})}
			</SafeArea>
		</CirclesBackground>
	);
};
