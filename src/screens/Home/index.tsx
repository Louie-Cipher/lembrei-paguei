import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import LinePercentItem from '../../components/LinePercentItem';
import { Container, SafeArea, Title, Subtitle } from './styles';
import { useTheme } from 'styled-components';

export default function Home() {
	const navigation = useNavigation<propsStack>();
	const theme = useTheme();

	return (
		<Container>
			<SafeArea>
				<ExpoStatusBar style='auto' />

				<Title>Olá, {'{user}'}</Title>
				<Subtitle>Seu resumo</Subtitle>

				<LinePercentItem
					title='Gastos gerais'
					currentLabel='Atual:'
					currentValue={700}
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
