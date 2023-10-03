import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { useTheme } from 'styled-components';
import {
	Container,
	SafeArea,
	Scroll,
	Title,
	ProfileContainer,
	ProfilePictureFrame,
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
	const theme = useTheme();
	const [selectedTheme, setSelectedTheme] = useState('default');

	const onChangeTheme = (theme: string) => {
		// TODO: Handle theme change
		return theme;
	};

	return (
		<Container>
			<SafeArea>
				<Scroll
					showsVerticalScrollIndicator={true}
					bounces={true}
					contentContainerStyle={{
						flexGrow: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Title>Configurações da conta</Title>

					<ProfileContainer>
						<ProfilePictureFrame>
							<ProfilePicture
								source={require('../../../assets/logo.png')}
							/>
						</ProfilePictureFrame>
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
								buttonTextAfterSelection={onChangeTheme}
								buttonStyle={{ width: '100%' }}
								onSelect={(selectedItem) =>
									setSelectedTheme(selectedItem)
								}
							/>
						</OptionItem>

						<LogoutButton>
							<LogoutText color={theme.orange}>Sair</LogoutText>
						</LogoutButton>

						<LogoutButton>
							<LogoutText color='#970159'>Excluir conta</LogoutText>
						</LogoutButton>
					</OptionsContainer>
				</Scroll>
			</SafeArea>
		</Container>
	);
};
