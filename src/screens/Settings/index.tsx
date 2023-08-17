import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import colors from '../../utils/colors';
import {
	Container,
	SafeArea,
	Title,
	ProfileContainer,
	ProfilePicture,
	ProfileName,
	OptionsContainer,
	OptionItem,
	OptionText,
	TextInput,
	LogoutButton,
	LogoutText,
} from './styles';

export default () => {
	const [theme, setTheme] = useState('default');

	return (
		<Container>
			<SafeArea>
				<Title>Configurações da conta</Title>

				<ProfileContainer>
					<ProfilePicture source={require('../../../assets/logo.png')} />
					<ProfileName>Olá, {'{user}'}</ProfileName>
				</ProfileContainer>

				<OptionsContainer>
					<OptionItem>
						<OptionText>Alterar nome</OptionText>
						<TextInput placeholder='{user}' />
					</OptionItem>

					<OptionItem>
						<OptionText>Alterar foto de perfil</OptionText>
						<TextInput placeholder='Selecionar Foto' />
					</OptionItem>

					<OptionItem>
						<OptionText>Tema</OptionText>
						<SelectDropdown
							data={['Padrão', 'Claro', 'Escuro', 'Alto contraste']}
							defaultButtonText='Padrão'
							buttonTextAfterSelection={(selectedItem) => {
								return selectedItem;
							}}
							onSelect={(selectedItem) => setTheme(selectedItem)}
						/>
					</OptionItem>

					<LogoutButton>
						<LogoutText color={colors.orange}>Sair</LogoutText>
					</LogoutButton>

					<LogoutButton>
						<LogoutText color='#970159'>Excluir conta</LogoutText>
					</LogoutButton>
				</OptionsContainer>
			</SafeArea>
		</Container>
	);
};
