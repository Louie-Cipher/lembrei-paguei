import { useState, useEffect } from 'react';
import LinePercentItem from 'components/LinePercentItem';
import { SafeArea, Title, Subtitle } from './styles';
import CirclesBackground from 'components/CirclesBackground';
import { GastoRepository, MetaRepository, ValoresRepository } from 'db/repositories';
import { DB } from '@/db';

export default function Home() {
	const [currentGastos, setCurrentGastos] = useState(0);
	const [limitGastos, setLimitGastos] = useState(0);

	const [currentMetas, setCurrentMetas] = useState(0);
	const [totalMetas, setTotalMetas] = useState(0);

	const fetchTotalGastos = async () => {
		// const last30Days = new Date().setDate(new Date().getTime() - 2_592_000_000);

		// const gastos = await DB.getRepository(Gasto)
		// 	.createQueryBuilder('gasto')
		// 	.where('gasto.data >= :data', { data: last30Days })
		// 	.getMany();

		const gastos = await GastoRepository.find();

		if (!gastos) return setCurrentGastos(0);

		const total = gastos.reduce((acc, gasto): number => acc + gasto.valor, 0);
		setCurrentGastos(total);

		const valores = await new ValoresRepository().findOrCreate();

		if (!valores) return setLimitGastos(0);

		setLimitGastos(valores.limiteGastos);
	};

	const fetchTotalMetas = async () => {
		const metas = await MetaRepository.find();

		if (!metas) {
			setCurrentMetas(0);
			setTotalMetas(0);
			return;
		}

		const current = metas.reduce((acc, meta) => acc + meta.valorAtual, 0);
		const total = metas.reduce((acc, meta) => acc + meta.valorTotal, 0);

		setCurrentMetas(current);
		setTotalMetas(total);
	};

	const refresh = async () => {
		if (!DB.isInitialized) await DB.initialize();

		fetchTotalGastos();
		fetchTotalMetas();
	};

	useEffect(() => {
		refresh();
	}, []);

	return (
		<CirclesBackground>
			<SafeArea>
				<Title>Olá, {'{user}'}</Title>
				<Subtitle>Seu resumo</Subtitle>

				<LinePercentItem
					title='Gastos gerais'
					currentLabel='Atual:'
					currentValue={currentGastos}
					totalLabel='Limite:'
					totalValue={limitGastos}
				/>

				<LinePercentItem
					title='Metas de economia'
					currentLabel='Economizou:'
					currentValue={currentMetas}
					totalLabel='Meta:'
					totalValue={totalMetas}
					isExceedGood
				/>

				{/* <RefreshButton
					onPress={() => {
						fetchTotalGastos();
						fetchTotalMetas();
					}}
				/> */}
			</SafeArea>
		</CirclesBackground>
	);
}
