import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

interface CirclesBackgroundProps {
	children: JSX.Element;
	style?: StyleProp<ViewStyle>;
}

export default ({ children, style }: CirclesBackgroundProps) => {
	return (
		<Container
			source={require('../../assets/circles-background.png')}
			imageStyle={{ resizeMode: 'cover', opacity: 0.4 }}
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
