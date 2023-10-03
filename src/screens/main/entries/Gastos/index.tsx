import SimpleValueItem from 'components/SimpleValueItem';
import CirclesBackground from 'components/CirclesBackground';
import { SafeArea, Title } from '../styles';
import { GastoRepository } from 'db/repositories';
import { Gasto } from 'db/entities';
import { useEffect, useState } from 'react';
import { dbDateString } from 'utils/date';

export default () => {
	const [gastos, setGastos] = useState<Gasto[]>([]);

	const fetchGastos = async () => {
		const gastosDB = await GastoRepository.find({});
		setGastos(gastosDB || []);
	};

	useEffect(() => {
		fetchGastos();
	}, []);
	return (
		<CirclesBackground>
			<SafeArea>
				<Title>Gastos</Title>

				{gastos.length > 0 ? (
					gastos.map((gasto) => (
						<SimpleValueItem
							key={gasto.id}
							title={gasto.nome}
							values={[
								{ key: 'Categoria', value: gasto.categoria },
								{ key: 'Valor', value: `R$ ${gasto.valor.toFixed(2)}` },
								{
									key: 'Data',
									value: dbDateString(gasto.data as string),
								},
							]}
						/>
					))
				) : (
					<></>
				)}
			</SafeArea>
		</CirclesBackground>
	);
};
