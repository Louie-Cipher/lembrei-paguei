import SimpleValueItem from 'components/SimpleValueItem';
import CirclesBackground from 'components/CirclesBackground';
import { SafeArea, Title } from '../styles';
import { ContaRepository } from 'db/repositories';
import { Conta } from 'db/entities';
import { useEffect, useState } from 'react';
import { dbDateString } from 'utils/date';

export default () => {
	const [contas, setContas] = useState<Conta[]>([]);

	const fetchContas = async () => {
		const gastosDB = await ContaRepository.find();
		setContas(gastosDB || []);
	};

	useEffect(() => {
		fetchContas();
	}, []);
	return (
		<CirclesBackground>
			<SafeArea>
				<Title>Gastos</Title>

				{contas.map((conta) => (
					<SimpleValueItem
						key={conta.id}
						title={conta.nome}
						values={[
							{ key: 'Categoria', value: conta.categoria },
							{ key: 'Valor', value: conta.valor.toString() },
							{
								key: 'Vence em',
								value: dbDateString(conta.dataVencimento as string),
							},
							{
								key: 'Pago em',
								value: conta.dataPagamento
									? dbDateString(conta.dataPagamento as string)
									: 'pendente',
							},
						]}
					/>
				))}
			</SafeArea>
		</CirclesBackground>
	);
};
