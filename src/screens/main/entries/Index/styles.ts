import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
	flex: 0.5;
	width: 80%;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.orange};
	width: 100%;
	padding: 15px 10px;
	border-radius: 8px;
	margin: 10px 0;
`;

export const ButtonText = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 18px;
	font-weight: bold;
`;
