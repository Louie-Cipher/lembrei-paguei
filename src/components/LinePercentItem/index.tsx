import { useTheme } from 'styled-components';
import {
	Container,
	SpaceBetween,
	Text,
	Title,
	LineTotal,
	LineCurrent,
	exceedIcon,
	Buttons,
	TitleContainer,
	Button,
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
			<TitleContainer>
				<Title>{title}</Title>
				<Buttons>
					{onEditButton && (
						<Button>
							<AntDesign
								name='edit'
								size={24}
								color={theme.orange}
								onPress={onEditButton}
							/>
						</Button>
					)}
					{onDeleteButton && (
						<Button>
							<AntDesign
								name='delete'
								size={24}
								color={theme.orange}
								onPress={onDeleteButton}
							/>
						</Button>
					)}
				</Buttons>
			</TitleContainer>
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
