import {
	View,
	TextInput,
	Image,
	ImageSourcePropType,
	StyleSheet,
	TextInputComponent,
} from 'react-native';
import { textContentType } from '../types/textInput';

interface InputProps {
	placeholder: string;
	icon?: ImageSourcePropType;
	type?: textContentType;
	borderColor?: string;

	error?: boolean | undefined;

	state: string;
	setState: (value: string) => void;
}

export default ({
	placeholder,
	type,
	icon,
	borderColor,
	error,
	state,
	setState,
}: InputProps) => {
	const handleTextChange = (text: string) => {
		setState(text);
	};

	return (
		<View
			style={[
				styles.container,
				{ borderColor: error ? '#f00' : borderColor ? borderColor : '#0008' },
			]}
		>
			{icon && <Image source={icon} />}
			<TextInput
				style={styles.textInput}
				placeholder={placeholder}
				textContentType={type}
				autoCapitalize={type === 'emailAddress' ? 'none' : 'sentences'}
				value={state}
				onChangeText={handleTextChange}
				secureTextEntry={type === 'password'}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderRadius: 10,
		margin: 10,
		borderWidth: 2,
	},
	textInput: {
		width: '100%',
	},
});
