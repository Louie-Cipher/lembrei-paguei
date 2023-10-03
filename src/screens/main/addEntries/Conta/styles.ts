import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { DB } from 'db/index';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background};
	flex: 1;
`;

export const SafeArea = styled.SafeAreaView`
	margin-top: ${StatusBar.currentHeight || 0}px;
	flex: 1;
    width: 100%;
`;

export const InputName = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    margin: 10px;
`;

export const TextInput = styled.TextInput`
    background-color: ${({ theme }) => theme.text}99;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`;