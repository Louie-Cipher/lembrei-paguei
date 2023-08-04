import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.background};
	align-items: center;
	justify-content: center;
`;

export const SafeAreaView = styled.SafeAreaView`
	flex: 1;
    width: 100%;
	align-items: center;
	justify-content: center;
	margin-top: ${StatusBar.currentHeight}px;
`;

export const TitleContainer = styled.View`
	margin-left: 10px;
	flex-direction: column;
	align-items: center;
`;

interface TitleProps {
    color: string;
}
export const TitleText = styled.Text<TitleProps>`
	color: ${({ color }) => color};
	font-size: 46px;
	font-weight: 900;
	text-transform: uppercase;
	margin: 0 0 -15px 0;
	padding: 0;
`;

export const SubtitleText = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 16px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;
	margin: 20px 0 30px;
`;

export const NextButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.green};
	border-radius: 50px;
	margin-top: 20px;
	padding: 12px 0;
	width: 65%;
`;

export const NextButtonText = styled.Text`
	color: ${({ theme }) => theme.background};
	font-size: 20px;
	font-weight: bold;
	text-align: center;
`;
