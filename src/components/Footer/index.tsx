import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { AntDesign } from '@expo/vector-icons';
import BillsIcon from '../../../assets/money_bill.svg';
import AddIcon from '../../../assets/add.svg';
import colors from '../../utils/colors';

export default () => {
	const navigation = useNavigation<propsStack>();
	return (
		<View style={styles.footer}>
			<View style={styles.footerLine} />

			<View style={styles.footerContent}>
				{/* Home Button */}
				<AntDesign
					name='home'
					size={40}
					color={Colors.orange}
					// onPress={() => navigation.navigate('Home', { userId: '1' })}
					style={styles.button}
				/>

				{/* Bills Button */}
				<BillsIcon
					width={40}
					height={40}
					// onPress={() => navigation.navigate('Contas', { userId: '1' })}
					style={styles.button}
				/>

				{/* Add button */}
				<AddIcon
					width={70}
					height={70}
					// onPress={() => navigation.navigate('AddConta')}
					style={styles.addButton}
				/>

				{/* Chart Button */}
				<FontAwesome
					name='bar-chart'
					size={40}
					color={Colors.orange}
					// onPress={() => navigation.navigate('Graficos', { userId: '1' })}
					style={styles.button}
				/>

				{/* User Button */}
				<FontAwesome
					name='user-circle-o'
					size={40}
					color={Colors.orange}
					// onPress={() => navigation.navigate('Profile', { userId: '1' })}
					style={styles.button}
				/>
			</View>
		</View>
	);
};

const AddButton = () => {
	return (
		<TouchableOpacity style={styles.addButton}>
			<View />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	footer: {
		position: 'absolute',
		bottom: 0,
		height: 80,
		width: '100%',
		justifyContent: 'center',
	},
	footerLine: {
		height: 2,
		width: '100%',
		backgroundColor: '#0005',
		position: 'absolute',
		top: 10,
	},
	footerContent: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 30,
		margin: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	addButton: {
		margin: 0,
		marginTop: -40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 200,
	},
	button: {
		margin: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
