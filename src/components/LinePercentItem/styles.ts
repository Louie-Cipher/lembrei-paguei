import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';
import highContrast from '../../theme/highContrast';

export const Container = styled.View`
	background-color: ${({ theme }) => (theme.highContrast ? '#000000' : '#cccccc90')};
	width: 100%;
	padding: 10px;
	margin: 10px;
	border-radius: 10px;
	/* border: 1px solid #ffffff; */
	border: ${({ theme }) => (theme.highContrast ? '1px solid #ffffff' : 'none')};
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: 20px;
	text-align: center;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.text};
	font-weight: 500;
`;

export const SpaceBetween = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 8px 0;
	padding: 0;
`;

export const LineTotal = styled.View`
	background-color: #ffffff;
	width: 100%;
	height: 15px;
	border-radius: 10px;
`;

interface ILineCurrent {
	percent: number;
	isExceedGood: boolean;
}
export const LineCurrent = styled.View<ILineCurrent>`
	/* background-color: ${(props) =>
		`hsl(${props.isExceedGood ? props.percent : 100 - props.percent}, 90%, 45%)`}; */

	background-color: ${(props) => props.theme.highContrast ? '#555' : percentToHSL(props.percent)};
	width: ${(props) => props.percent}%;
	height: 100%;
	border-radius: 10px;
`;

export const exceedIcon: StyleProp<ViewStyle> = {
	position: 'absolute',
	right: -15,
	top: -15,
	transform: [{ rotate: '20deg' }],
};

const percentToHSL = (percent: number) => `hsl(${percent}, 90%, 45%)`;
