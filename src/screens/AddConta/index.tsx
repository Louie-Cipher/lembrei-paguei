import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native';
import colors from '../../utils/colors';
import Footer from '../../components/Footer';

export default () => {
	const { height, width } = useWindowDimensions();

	const buttonsWidth = width * 0.6;

	return (
		<View style={styles.container}>
			<View style={[styles.buttonsContainer, { height: height * 0.5 }]}>
				<TouchableOpacity style={[styles.button, { width: buttonsWidth }]}>
					<Text style={styles.buttonText}>Adicionar Meta</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[styles.button, { width: buttonsWidth }]}>
					<Text style={styles.buttonText}>Adicionar Gasto</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[styles.button, { width: buttonsWidth }]}>
					<Text style={styles.buttonText}>Adicionar Conta</Text>
				</TouchableOpacity>
			</View>

			<Footer />
			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#0006',
	},
	buttonsContainer: {
		alignItems: 'center',
		margin: 0,
		padding: 0,
	},
	button: {
		margin: 10,
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: colors.orange,
	},
	buttonText: {
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
});
