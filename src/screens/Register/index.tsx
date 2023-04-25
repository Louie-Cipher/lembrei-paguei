import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../utils/colors';
import BaseTextInput from '../../components/BaseTextInput';

export default () => {
	const navigation = useNavigation<propsStack>();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [usernameError, setUsernameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleRegister = () => {
		if (!username) setUsernameError(true);
		if (!email) setEmailError(true);
		if (!password) setPasswordError(true);

		if (username && email && password) return navigation.navigate('Login');

		ToastAndroid.show('Preencha todos os campos', ToastAndroid.SHORT);
	};

	return (
		<View style={styles.container}>
			<StatusBar style='auto' />

			<Text style={styles.title}>Criar conta</Text>

			<View style={styles.buttonsContainer}>
				<BaseTextInput
					placeholder='Nome de Usuário'
					borderColor={Colors.orange}
					error={usernameError}
					state={username}
					setState={setUsername}
				/>

				<BaseTextInput
					placeholder='Email'
					type='emailAddress'
					borderColor={Colors.orange}
					error={emailError}
					state={email}
					setState={setEmail}
				/>

				<BaseTextInput
					placeholder='Senha'
					type='password'
					borderColor={Colors.orange}
					error={passwordError}
					state={password}
					setState={setPassword}
				/>

				<TouchableOpacity style={styles.button} onPress={handleRegister}>
					<Text style={styles.buttonText}>Criar conta</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.loginRedirect}>
				Já tem uma conta?{' '}
				<Text
					style={{ fontWeight: 'bold', color: Colors.orange }}
					onPress={() => navigation.navigate('Login')}
				>
					Entrar
				</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.white,
		alignItems: 'center',
	},
	title: {
		color: Colors.orange,
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 45,
	},
	buttonsContainer: {
		width: '80%',
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
		color: Colors.green,
		fontSize: 20,
		fontWeight: 'bold',
	},
	loginRedirect: {
		fontSize: 16,
		marginBottom: 20,
	},
});
