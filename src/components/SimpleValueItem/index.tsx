import { Container, Title, Item, Key, Value, TitleContainer } from './styles';

interface KeyValue {
	key: string;
	value: string;
}

interface SimpleValueItemProps {
	title: string;
	subtitle?: string;
	values: KeyValue[];
}

export default ({ title, subtitle, values }: SimpleValueItemProps) => {
	return (
		<Container>
			<TitleContainer>
				<Title>{title}</Title>
				{subtitle && <Key>{subtitle}</Key>}
			</TitleContainer>

			{values.map(({ key, value }) => (
				<Item key={key}>
					<Key>{key}</Key>
					<Value>{value}</Value>
				</Item>
			))}
		</Container>
	);
};
