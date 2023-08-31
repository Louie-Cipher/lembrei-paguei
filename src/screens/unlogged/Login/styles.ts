import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	background-color: ${(props) => props.theme.background};
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	width: 100%;
	align-items: center;
	justify-content: center;
	margin-top: ${StatusBar.currentHeight}px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.text};
	font-size: 30px;
	font-weight: bold;
	margin-top: 40px;
`;

export const ButtonsContainer = styled.View`
	flex: 1;
	width: 80%;
	align-items: center;
	justify-content: center;
`;

interface ButtonProps {
	backgroundColor: string;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
	background-color: ${(props) =>
		props.theme.highContrast ? '#ffff00' : props.backgroundColor};
	width: 100%;
	elevation: 5;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	padding: 5px 10px;
	border-radius: 50px;
`;

interface ButtonTextProps {
	color: string;
}
export const SocialLoginText = styled.Text<ButtonTextProps>`
	color: ${(props) => (props.theme.highContrast ? '#000000' : props.color)};
	flex: 1;
	text-align: center;
	font-size: 18px;
	font-weight: 500;
`;
