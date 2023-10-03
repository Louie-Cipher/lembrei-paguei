import CirclesBackground from 'components/CirclesBackground';
import {
	ItemContainer,
	ItemText,
	ItemTitle,
	SafeArea,
	Title,
	ItemContentLine,
} from './styles';
import { dateToString } from 'utils/date';

export default () => {
	return (
		<CirclesBackground>
			<SafeArea>
				<Title>Grupos</Title>

				<Item
					title='Churrasco'
					date={new Date()}
					participants={10}
					totalValue={100}
				/>

				<Item
					title='Rodeio'
					date={new Date()}
					participants={15}
					totalValue={250}
				/>

				<Item
					title='Passeio'
					date={new Date()}
					participants={5}
					totalValue={460}
				/>
			</SafeArea>
		</CirclesBackground>
	);
};

interface ItemProps {
	title: string;
	date: Date;
	participants: number;
	totalValue: number;
}
const Item = ({ title, date, participants, totalValue }: ItemProps) => {
	return (
		<ItemContainer>
			<ItemContentLine>
				<ItemTitle>{title}</ItemTitle>
				<ItemText>{dateToString(date)}</ItemText>
			</ItemContentLine>

			<ItemContentLine>
				<ItemText>Participantes:</ItemText>
				<ItemText>{participants}</ItemText>
			</ItemContentLine>

			<ItemContentLine>
				<ItemText>
					Valor Total
				</ItemText>
				<ItemText>
					R$ {totalValue.toFixed(2).replace('.', ',')}
				</ItemText>
			</ItemContentLine>
			<ItemContentLine>
				<ItemText>
					Valor por pessoa
				</ItemText>
				<ItemText>R${' '}
					{(totalValue / participants).toFixed(2).replace('.', ',')}
				</ItemText>
			</ItemContentLine>
		</ItemContainer>
	);
};
