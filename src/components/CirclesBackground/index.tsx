import styled, { useTheme } from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

interface CirclesBackgroundProps {
	children: JSX.Element;
	style?: StyleProp<ViewStyle>;
}

export default ({ children, style }: CirclesBackgroundProps) => {
	const theme = useTheme();

	return (
		<Container
			source={require('../../assets/circles-background.png')}
			imageStyle={{ resizeMode: 'cover', opacity: theme.highContrast ? 0 : 0.5 }}
			style={style || {}}
		>
			{children}
		</Container>
	);
};

const Container = styled.ImageBackground`
	background-color: ${({ theme }) => theme.background};
	flex: 1;
	width: 100%;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;
