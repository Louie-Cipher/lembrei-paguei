import {
	Container,
	SpaceBetween,
	Text,
	Title,
	LineTotal,
	LineCurrent,
	exceedIcon,
} from './styles';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

interface LinePercentItemProps {
	title: string;
	totalLabel: string;
	totalValue: number;
	totalColor?: string;
	currentLabel: string;
	currentValue: number;
	currentColor?: string;
	isExceedGood?: boolean | undefined;
}
export default ({
	title,
	totalLabel,
	totalValue,
	totalColor = 'red',
	currentLabel,
	currentValue,
	currentColor = 'green',
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
					currentValue={currentValue}
					currentColor={currentColor}
					totalValue={totalValue}
					totalColor={totalColor}
				/>

				{currentValue > totalValue && (
					<>
						{isExceedGood ? (
							<MaterialCommunityIcons
								name='crown'
								size={40}
								color='#ddaa00'
								style={exceedIcon}
							/>
						) : (
							<Foundation
								name='alert'
								size={40}
								color='#f11'
								style={exceedIcon}
							/>
						)}
					</>
				)}
			</SpaceBetween>
		</Container>
	);
};

interface LineProps {
	currentValue: number;
	totalValue: number;
	currentColor?: string;
	totalColor?: string;
}
const Line = ({
	currentValue,
	totalValue,
	currentColor = 'green',
	totalColor = 'red',
}: LineProps) => (
	<LineTotal color={totalColor}>
		<LineCurrent color={currentColor} percent={(currentValue / totalValue) * 100} />
	</LineTotal>
);
