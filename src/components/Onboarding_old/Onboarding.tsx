import {
	FlatList,
	Text,
	View,
	Image,
	useWindowDimensions,
	Animated,
	StyleSheet,
} from 'react-native';
import Colors from '../../utils/colors';
import OnboardingItem from './OnboardingItem';
import { useRef, useState } from 'react';
import slides from '../Onboarding/pages';
import Paginator from './Paginator';
import NextButton from './NextButton';

export type OnboardingItemType = {
	id: number;
	title: string;
	description: string;
};

interface OnboardingProps {
	items: OnboardingItemType[];
}

export default ({ items }: OnboardingProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;

	const currentItemsChanged = useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;

	const slidesRef = useRef(null);
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				renderItem={({ item }) => <OnboardingItem item={item} />}
				horizontal
				pagingEnabled
				bounces={false}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: { x: scrollX },
							},
						},
					],
					{ useNativeDriver: false }
				)}
				scrollEventThrottle={32}
				onViewableItemsChanged={currentItemsChanged}
				viewabilityConfig={viewConfig}
				ref={slidesRef}
			/>

			<Paginator data={items} scrollX={scrollX} />
			<NextButton />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0000',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
