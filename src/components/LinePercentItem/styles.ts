import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

export const Container = styled.View`
	background-color: #cccccc80;
	width: 100%;
	padding: 10px;
	margin: 10px;
	border-radius: 10px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 20px;
	text-align: center;
	font-weight: bold;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.text};
	font-weight: 700;
`;

export const SpaceBetween = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 5px 0;
`;

interface ILineTotal {
	color: string;
}

export const LineTotal = styled.View<ILineTotal>`
	background-color: ${(props) => props.color};
	width: 100%;
	height: 15px;
	border-radius: 10px;
`;

interface ILineCurrent {
	color: string;
	percent: number;
}

export const LineCurrent = styled.View<ILineCurrent>`
	background-color: ${(props) => props.color};
	width: ${(props) => Math.min(props.percent, 100)}%;
	height: 100%;
	border-radius: 10px;
`;

export const exceedIcon: StyleProp<ViewStyle> = {
	position: 'absolute',
	right: -15,
	top: -15,
	transform: [{ rotate: '20deg' }],
};
