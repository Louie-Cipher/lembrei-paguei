import { StyleSheet, Text, View } from 'react-native';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

interface LinePercentItemProps {
	title: string;
	totalLabel: string;
	totalValue: number;
	totalColor?: string;
	currentLabel: string;
	currentValue: number;
	currentColor?: string;
	isExceedGood?: boolean | undefined;
}
export default ({
	title,
	totalLabel,
	totalValue,
	totalColor = 'red',
	currentLabel,
	currentValue,
	currentColor = 'green',
	isExceedGood = false,
}: LinePercentItemProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.spaceBetween}>
				<Text style={styles.text}>
					{currentLabel} R${currentValue.toFixed(2).replace('.', ',')}
				</Text>
				<Text style={styles.text}>
					{totalLabel} R${totalValue.toFixed(2).replace('.', ',')}
				</Text>
			</View>

			<View style={styles.spaceBetween}>
				<Line
					currentValue={currentValue}
					currentColor={currentColor}
					totalValue={totalValue}
					totalColor={totalColor}
				/>

				{currentValue > totalValue && (
					<>
						{isExceedGood ? (
							<MaterialCommunityIcons
								name='crown'
								size={40}
								color='#ddaa00'
								style={styles.exceedIcon}
							/>
						) : (
							<Foundation
								name='alert'
								size={40}
								color='#f11'
								style={styles.exceedIcon}
							/>
						)}
					</>
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
					width:
						currentValue > totalValue
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
	exceedIcon: {
		position: 'absolute',
		right: -15,
		top: -15,
		transform: [{ rotate: '20deg' }],
	},
});
