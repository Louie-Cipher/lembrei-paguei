import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default () => {
	const navigation = useNavigation<propsStack>();
	return (
		<View style={styles.footer}>
			<View style={styles.footerLine} />

			<View style={styles.footerContent}>
				<TouchableOpacity
					onPress={() => navigation.navigate('Home', { userId: '1' })}
				>
					<AntDesign name='home' size={40} color={Colors.orange} />
				</TouchableOpacity>

				{/* Add button */}
				<TouchableOpacity
					style={styles.addButton}
					onPress={() => navigation.navigate('AddConta')}
				>
					<Ionicons name='add-circle' size={85} color={Colors.green} />
				</TouchableOpacity>

				{/* Chart Button */}
				<TouchableOpacity
					onPress={() => navigation.navigate('Graficos', { userId: '1' })}
				>
					<FontAwesome name='bar-chart' size={40} color={Colors.orange} />
				</TouchableOpacity>

				{/* User Button */}
				<TouchableOpacity
					onPress={() => navigation.navigate('Profile', { userId: '1' })}
				>
					<FontAwesome name='user-circle-o' size={40} color={Colors.orange} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	footer: {
		position: 'absolute',
		bottom: 0,
		height: 80,
		width: '100%',
	},
	footerLine: {
		height: 1,
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
		flex: 1,
		padding: 10,
		marginTop: -40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 200,
	},
});
