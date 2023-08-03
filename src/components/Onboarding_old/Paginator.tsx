import { Animated, StyleSheet, View, useWindowDimensions } from 'react-native';
import Colors from '../../utils/colors';

interface PaginatorProps {
	data: any;
	scrollX: any;
}

const dotSizeWidth = 12;
const dotSizeHeight = 12;

export default ({ data, scrollX }: PaginatorProps) => {
	const { width } = useWindowDimensions();

	return (
		<View style={styles.container}>
			{data.map((_: any, i: number) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [dotSizeWidth, dotSizeWidth * 2, dotSizeWidth],
					extrapolate: 'clamp',
				});

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: 'clamp',
				});

				return (
					<Animated.View
						key={i.toString()}
						style={[styles.dot, { width: dotWidth, opacity }]}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 20,
	},
	dot: {
		backgroundColor: Colors.orange,
		height: dotSizeHeight,
		borderRadius: 10,
		marginHorizontal: 8,
	},
});
