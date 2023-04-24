import Onboarding from 'react-native-onboarding-swiper';
import pages from './pages';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../utils/colors';

export default () => {
	const navigation = useNavigation<propsStack>();
	return (
		<Onboarding
			pages={pages}
			nextLabel='Próximo'
			skipLabel='Pular'
			titleStyles={styles.onboardingTitle}
			subTitleStyles={styles.onboardingSubtitle}
			onDone={() => navigation.navigate('Register')}
			skipToPage={pages.length - 1}
			DotComponent={({ selected }) => (
				<View
					style={[
						styles.dot,
						{ backgroundColor: selected ? Colors.green : Colors.orange },
					]}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	dot: {
		backgroundColor: Colors.orange,
		height: 12,
		width: 12,
		borderRadius: 10,
		marginHorizontal: 8,
	},
	onboardingTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	onboardingSubtitle: {
		fontSize: 20,
	},
	doneText: {
		color: Colors.green,
		fontSize: 16,
		fontWeight: 'bold',
	},
});
