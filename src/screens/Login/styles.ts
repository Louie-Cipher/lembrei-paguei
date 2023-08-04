import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	background-color: ${(props) => props.theme.background};
	flex: 1;
	justify-content: space-between;
	align-items: center;
`;

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: space-evenly;
	margin-top: ${StatusBar.currentHeight}px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.text};
	font-size: 30px;
	font-weight: bold;
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
	background-color: ${(props) => props.backgroundColor};
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	padding: 10px 20px;
	border-radius: 50px;
	box-shadow: 0px 0px 5px #000000;
`;

interface ButtonTextProps {
	color: string;
}
export const SocialLoginText = styled.Text<ButtonTextProps>`
	color: ${(props) => props.color};
	text-align: center;
	font-size: 18px;
	font-weight: 500;
`;
