import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import colors from '../../utils/colors';
import { set } from 'react-native-reanimated';

export default () => {
	const [theme, setTheme] = useState('default');

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentArea}>
				<Text style={styles.title}>Configurações da conta</Text>

				<View style={styles.profileContainer}>
					<Image
						style={styles.profilePicture}
						source={require('../../../assets/logo.png')}
					/>
					<Text style={styles.profileName}>Olá, {'{user}'}</Text>
				</View>

				<View style={styles.optionsContainer}>
					<View style={styles.optionItem}>
						<Text style={styles.optionItemText}>Alterar nome</Text>
						<TextInput style={styles.textInput} placeholder='{user}' />
					</View>

					<View style={styles.optionItem}>
						<Text style={styles.optionItemText}>Alterar foto de perfil</Text>
						<TextInput
							style={styles.textInput}
							placeholder='Selecionar Foto'
						/>
					</View>

					<View style={styles.optionItem}>
						<Text style={styles.optionItemText}>Tema</Text>
						<SelectDropdown
							data={['Padrão', 'Claro', 'Escuro', 'Alto contraste']}
							defaultButtonText='Padrão'
							buttonTextAfterSelection={(selectedItem) => {
								return selectedItem;
							}}
							onSelect={(selectedItem, index) => setTheme(selectedItem)}
						/>
					</View>

					<TouchableOpacity style={styles.logoutOption}>
						<Text style={[styles.logoutOptionText, { color: colors.orange }]}>
							Sair
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.logoutOption}>
						<Text style={[styles.logoutOptionText, { color: '#970159' }]}>
							Excluir conta
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
	},
	contentArea: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
		width: '100%',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.orange,
	},
	profileContainer: {
		width: '90%',
		marginVertical: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
	profilePicture: {
		width: 80,
		height: 80,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#0008',
	},
	profileName: {
		fontSize: 25,
		marginLeft: 30,
		flexWrap: 'wrap',
		flexShrink: 1,
		fontWeight: 'bold',
	},
	optionsContainer: {
		flex: 0.9,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	optionItem: {
		width: '90%',
		padding: 15,
		backgroundColor: `${colors.orange}50`,
		borderRadius: 10,
		justifyContent: 'space-between',
	},
	optionItemText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	textInput: {
		borderRadius: 10,
		backgroundColor: '#0001',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	logoutOption: {
		width: '90%',
		padding: 15,
		backgroundColor: `${colors.orange}50`,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoutOptionText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
