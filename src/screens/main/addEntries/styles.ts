import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background};
	flex: 1;
`;

export const SafeArea = styled.SafeAreaView`
	margin-top: ${StatusBar.currentHeight || 0}px;
	flex: 1;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Item = styled.View`
	width: 90%;
`;

export const InputName = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 20px;
	margin: 10px;
`;

export const TextInput = styled.TextInput`
	background-color: ${({ theme }) => theme.lowerTone}aa;
	color: ${({ theme }) => theme.text};
	border-radius: 10px;
	padding: 5px 10px;
	margin: 10px 0;
`;

export const DateItem = styled.View`
	flex-direction: column;
	justify-content: space-between;
	width: 90%;
	margin: 10px;
	border-radius: 30px;
`;

export const DateButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.orange}aa;
	border-radius: 30px;
	padding: 10px 20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.orange};
	border-radius: 30px;
	padding: 10px 20px;
	margin: 10px;
	width: 90%;
`;

export const ButtonText = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 20px;
	text-align: center;
`;

export const Switch = styled.Switch`
	color: #000;
`;

export const SpaceBetween = styled.View`
	flex-direction: row;
	align-items: center;
`;
