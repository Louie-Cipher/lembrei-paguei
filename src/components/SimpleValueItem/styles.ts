import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => (theme.highContrast ? '#000000' : '#aaaaaacc')};
	width: 100%;
	padding: 10px;
	margin: 10px;
	border-radius: 10px;
	border: ${({ theme }) => (theme.highContrast ? '1px solid #ffffff' : 'none')};
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 20px;
	text-align: center;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const Item = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
`;

export const Key = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 16px;
	font-weight: bold;
`;

export const Value = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 16px;
	margin-bottom: 10px;
`;
