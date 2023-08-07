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

interface LinePercentItemProps {
	title: string;
	totalLabel: string;
	totalValue: number;
	currentLabel: string;
	currentValue: number;
	isExceedGood?: boolean | undefined;
}
export default ({
	title,
	totalLabel,
	totalValue,
	currentLabel,
	currentValue,
	isExceedGood = false,
}: LinePercentItemProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			<SpaceBetween>
				<Text>
					{currentLabel} R${currentValue.toFixed(2).replace('.', ',')}
				</Text>
				<Text>
					{totalLabel} R${totalValue.toFixed(2).replace('.', ',')}
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
						color='#ffff00'
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
