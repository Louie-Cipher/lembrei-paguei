import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background};
	flex: 1;
	width: 100%;
	align-items: center;
`;

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight || 0}px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 20px;
	font-weight: bold;
`;

export const ProfileContainer = styled.View`
	width: 90%;
	margin: 40px 0;
	flex-direction: row;
	align-items: center;
`;

export const ProfilePicture = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 50px;
	border-width: 2px;
	border-color: ${({ theme }) => theme.text}80;
`;

export const ProfileName = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 25px;
	font-weight: bold;
	margin-left: 30px;
	flex-wrap: wrap;
	flex-shrink: 1;
`;

export const OptionsContainer = styled.View`
	flex: 1;
	width: 90%;
	align-items: center;
	justify-content: space-between;
`;

export const OptionItem = styled.View`
	background-color: ${({ theme }) => theme.orange}50;
	width: 100%;
	padding: 15px;
	border-radius: 10px;
	justify-content: space-between;
`;

export const OptionText = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 18px;
	font-weight: bold;
`;

export const TextInput = styled.TextInput`
	background-color: ${({ theme }) => theme.text}10;
	border-radius: 10px;
	padding: 10px 5px;
`;

export const LogoutButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.orange}50;
	width: 100%;
	padding: 15px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
`;

interface ILogoutText {
	color: string;
}

export const LogoutText = styled.Text<ILogoutText>`
	color: ${({ color }) => color};
	font-size: 18px;
	font-weight: bold;
`;