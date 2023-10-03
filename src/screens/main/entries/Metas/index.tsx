import LinePercentItem from 'components/LinePercentItem';
import CirclesBackground from 'components/CirclesBackground';
import { SafeArea, Title } from '../styles';
import { MetaRepository } from 'db/repositories';
import { Meta } from 'db/entities';
import { useEffect, useState } from 'react';

export default () => {
	const [metas, setMetas] = useState<Meta[]>([]);

	const fetchMetas = async () => {
		const metasDB = await MetaRepository.find();
		setMetas(metasDB || []);
	};

	useEffect(() => {
		fetchMetas();
	}, []);

	return (
		<CirclesBackground>
			<SafeArea>
				<Title>Metas</Title>

				{metas.map((meta) => (
					<LinePercentItem
						key={meta.id}
						title={meta.nome}
						currentLabel='Valor atual'
						currentValue={meta.valorAtual}
						totalLabel='Valor total'
						totalValue={meta.valorTotal}
						isExceedGood={true}
					/>
				))}
			</SafeArea>
		</CirclesBackground>
	);
};
