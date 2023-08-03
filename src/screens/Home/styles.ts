import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background};
	flex: 1;
	width: 100%;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	width: 90%;
	align-items: center;
	margin: 0;
	padding: 0;
	margin-top: ${StatusBar.currentHeight}px;
`;

export const Title = styled.Text`
	font-size: 30px;
	font-weight: 700;
	color: ${({ theme }) => theme.orange};
`;

export const Subtitle = styled.Text`
	font-size: 20px;
	font-weight: 700;
	color: ${({ theme }) => theme.orange};
`;
