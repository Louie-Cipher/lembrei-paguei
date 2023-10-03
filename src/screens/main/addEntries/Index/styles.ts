import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	background-color: #00000000;
	flex: 1;
	align-items: center;
	justify-content: flex-end;
`;

export const ButtonsContainer = styled.View`
	align-items: center;
	width: 60%;
	margin: 0 0 50px;
	padding: 0;
`;

export const Button = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.orange};
	align-self: center;
	justify-content: center;
	elevation: 8;
	border-radius: 20px;
	padding: 15px 30px;
	width: 100%;
	margin: 10px 0;
`;

export const ButtonText = styled.Text`
	color: ${({ theme }) => theme.background};
	font-size: 20px;
	font-weight: bold;
`;
