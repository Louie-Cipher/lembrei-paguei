import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import LinePercentItem from '../../components/LinePercentItem';
import Colors from '../../utils/colors';

export default function Home() {
	const navigation = useNavigation<propsStack>();

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safeArea}>
				<ExpoStatusBar style='auto' />

				<Text style={styles.title}>Olá, {'{user}'}</Text>
				<Text style={styles.subtitle}>Seu resumo</Text>

				<LinePercentItem
					title='Gastos gerais'
					currentLabel='Atual:'
					currentValue={500}
					currentColor={Colors.green}
					totalLabel='Limite:'
					totalValue={600}
					totalColor='#fff'
					isExceedGood={false}
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

			</SafeAreaView>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end',
		margin: 0,
		padding: 0,
	},
	safeArea: {
		flex: 1,
		width: '100%',
		backgroundColor: '#0000',
		alignItems: 'center',
		margin: 0,
		padding: 0,
		marginTop: StatusBar.currentHeight,
	},
	title: {
		fontSize: 30,
		fontWeight: '700',
		color: Colors.orange,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: '700',
		color: Colors.orange,
	},
});
