import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import LinePercentItem from '../../components/LinePercentItem';
import Colors from '../../utils/colors';
import { Container, SafeArea, Title, Subtitle } from './styles';

export default function Home() {
	const navigation = useNavigation<propsStack>();

	return (
		<Container>
			<SafeArea>
				<ExpoStatusBar style='auto' />

				<Title>Olá, {'{user}'}</Title>
				<Subtitle>Seu resumo</Subtitle>

				<LinePercentItem
					title='Gastos gerais'
					currentLabel='Atual:'
					currentValue={500}
					currentColor={Colors.green}
					totalLabel='Limite:'
					totalValue={600}
					totalColor='#fff'
				/>

				<LinePercentItem
					title='Metas de economia'
					currentLabel='Economizou:'
					currentValue={230.55}
					currentColor={Colors.green}
					totalLabel='Meta:'
					totalValue={200}
					totalColor='#fff'
					isExceedGood
				/>
			</SafeArea>
		</Container>
	);
}
