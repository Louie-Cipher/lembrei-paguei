import React from 'react';
import LinePercentItem from '../../../components/LinePercentItem';
import { Container, SafeArea, Title, Subtitle } from './styles';

export default function Home() {
	return (
		<Container
			source={require('../../../../assets/circles-background.png')}
			imageStyle={{ resizeMode: 'cover', opacity: 0.4 }}
		>
			<SafeArea>
				<Title>Olá, {'{user}'}</Title>
				<Subtitle>Seu resumo</Subtitle>

				<LinePercentItem
					title='Gastos gerais'
					currentLabel='Atual:'
					currentValue={500}
					totalLabel='Limite:'
					totalValue={600}
				/>

				<LinePercentItem
					title='Metas de economia'
					currentLabel='Economizou:'
					currentValue={230.55}
					totalLabel='Meta:'
					totalValue={200}
					isExceedGood
				/>
			</SafeArea>
		</Container>
	);
}
