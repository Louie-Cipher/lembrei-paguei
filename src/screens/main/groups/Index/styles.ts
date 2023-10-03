import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight || 0}px;
	width: 90%;
	align-items: flex-start;
	justify-content: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 24px;
	font-weight: bold;
`;

export const ItemContainer = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 10px 0px;
	border-color: ${({ theme }) => theme.text}aa;
	border-bottom-width: 1px;
	border-top-width: 1px;
`;

export const ItemImage = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 50px;
`;

export const ItemContentLine = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

export const ItemTitle = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 18px;
	font-weight: bold;
`;

export const ItemText = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 14px;
`;
