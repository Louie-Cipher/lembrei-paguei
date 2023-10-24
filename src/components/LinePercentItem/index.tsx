import { useTheme } from 'styled-components';
import {
	Container,
	SpaceBetween,
	Text,
	Title,
	LineTotal,
	LineCurrent,
	exceedIcon,
} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { numberToReal } from 'utils/number';

interface LinePercentItemProps {
	title: string;
	totalLabel: string;
	totalValue: number;
	currentLabel: string;
	currentValue: number;
	isExceedGood?: boolean | undefined;
	onDeleteButton?: () => void;
	onEditButton?: () => void;
}
export default ({
	title,
	totalLabel,
	totalValue,
	currentLabel,
	currentValue,
	isExceedGood = false,
	onDeleteButton,
	onEditButton,
}: LinePercentItemProps) => {
	const theme = useTheme();
	return (
		<Container>
			<Title>
				{title}
				{onEditButton && (
					<AntDesign
						name='edit'
						size={24}
						color={theme.higherTone}
						onPress={onEditButton}
					/>
				)}
				{onDeleteButton && (
					<AntDesign
						name='delete'
						size={24}
						color={theme.higherTone}
						onPress={onDeleteButton}
					/>
				)}
			</Title>
			<SpaceBetween>
				<Text>
					{currentLabel} {numberToReal(currentValue)}
				</Text>
				<Text>
					{totalLabel} {numberToReal(totalValue)}
				</Text>
			</SpaceBetween>

			<SpaceBetween>
				<Line
					isExceedGood={isExceedGood}
					currentValue={currentValue}
					totalValue={totalValue}
				/>

				{currentValue > totalValue && (
					<MaterialCommunityIcons
						name={isExceedGood ? 'crown' : 'alert'}
						// color='#ffff00'
						color={theme.highContrast ? theme.text : '#ffff00'}
						size={40}
						style={exceedIcon}
					/>
				)}
			</SpaceBetween>
		</Container>
	);
};

interface LineProps {
	currentValue: number;
	totalValue: number;
	isExceedGood?: boolean | undefined;
}
const Line = ({ currentValue, totalValue, isExceedGood = false }: LineProps) => (
	<LineTotal>
		<LineCurrent
			isExceedGood={isExceedGood}
			percent={Math.min((currentValue / totalValue) * 100, 100)}
		/>
	</LineTotal>
);
