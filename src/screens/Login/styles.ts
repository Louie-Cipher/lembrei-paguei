import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
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
	font-size: 30px;
	font-weight: bold;
`;

export const ButtonsContainer = styled.View`
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
