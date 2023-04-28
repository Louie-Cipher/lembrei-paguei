import { useState } from 'react';
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StatusBar } from 'expo-status-bar';
import BaseTextInput from '../../components/BaseTextInput';
import Colors from '../../utils/colors';
import IsEmail from '../../utils/isEmail';

export default () => {
	const navigation = useNavigation<propsStack>();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleLogin = () => {
		if (!username) setUsernameError(true);
		if (!password) setPasswordError(true);

		if (!username || !password)
			return ToastAndroid.show('Preencha todos os campos', ToastAndroid.SHORT);

		const isEmail = IsEmail(username);

		
		// TODO: implement login
		navigation.navigate('Home', { userId: '1' });
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />

			<View style={styles.buttonsContainer}>
				<BaseTextInput
					placeholder='nome de usuário ou email'
					borderColor={Colors.orange}
					error={usernameError}
					state={username}
					setState={setUsername}
				/>
				<BaseTextInput
					placeholder='senha'
					borderColor={Colors.orange}
					error={passwordError}
					type='password'
					state={password}
					setState={setPassword}
				/>

				<TouchableOpacity style={styles.button} onPress={handleLogin}>
					<Text style={styles.buttonText}>Entrar</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.loginRedirect}>
				Não tem uma conta?{' '}
				<Text
					style={{ fontWeight: 'bold', color: Colors.orange }}
					onPress={() => navigation.navigate('Register')}
				>
					Cadastre-se
				</Text>
			</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.white,
		alignItems: 'center',
	},
	buttonsContainer: {
		flex: 1,
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: '100%',
		padding: 15,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.orange,
	},
	buttonText: {
		color: Colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
	loginRedirect: {
		fontSize: 16,
		marginBottom: 20,
	},
});
