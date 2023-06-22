import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

interface LinePercentItemProps {
	title: string;
	totalLabel: string;
	totalValue: number;
	totalColor?: string;
	currentLabel: string;
	currentValue: number;
	currentColor?: string;
	crownWhenBigger?: boolean | undefined;
}
export default ({
	title,
	totalLabel,
	totalValue,
	totalColor = 'red',
	currentLabel,
	currentValue,
	currentColor = 'green',
	crownWhenBigger = false,
}: LinePercentItemProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.spaceBetween}>
				<Text style={styles.text}>
					{currentLabel} R${currentValue}
				</Text>
				<Text style={styles.text}>
					{totalLabel} R${totalValue}
				</Text>
			</View>

			<View style={styles.spaceBetween}>
				<Line
					currentValue={currentValue}
					currentColor={currentColor}
					totalValue={totalValue}
					totalColor={totalColor}
				/>

				{crownWhenBigger && currentValue > totalValue && (
					<MaterialCommunityIcons
						name='crown'
						size={40}
						color='#ddaa00'
						style={{
							position: 'absolute',
							right: -5,
							top: -15,
							transform: [{ rotate: '20deg' }],
						}}
					/>
				)}
			</View>
		</View>
	);
};

interface LineProps {
	currentValue: number;
	totalValue: number;
	currentColor?: string;
	totalColor?: string;
}
const Line = ({
	currentValue,
	totalValue,
	currentColor = 'green',
	totalColor = 'red',
}: LineProps) => {
	const biggerThanTotal = currentValue > totalValue;

	return (
		<View
			style={{
				width: '100%',
				height: 15,
				borderRadius: 10,
				backgroundColor: totalColor,
			}}
		>
			<View
				style={{
					width: biggerThanTotal
						? '100%'
						: `${(currentValue / totalValue) * 100}%`,
					height: '100%',
					borderRadius: 10,
					backgroundColor: currentColor,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		backgroundColor: '#E6DFDF',
	},
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
	text: {
		fontWeight: '700',
	},
	spaceBetween: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 10,
	},
});
