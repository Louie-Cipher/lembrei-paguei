import { useTheme } from 'styled-components';
import {
	Container,
	Title,
	ButtonsContainer,
	Item,
	Key,
	Value,
	TitleContainer,
} from './styles';
import { AntDesign } from '@expo/vector-icons';

interface KeyValue {
	key: string;
	value: string;
}

interface SimpleValueItemProps {
	title: string;
	subtitle?: string;
	values: KeyValue[];
	onEditButton?: () => void;
	onDeleteButton?: () => void;
}

export default ({
	title,
	subtitle,
	values,
	onEditButton,
	onDeleteButton,
}: SimpleValueItemProps) => {
	const theme = useTheme();

	interface ButtonProps {
		name: 'edit' | 'delete';
		onPress: () => void;
	}
	const Button = ({ name, onPress }: ButtonProps) => (
		<Key onPress={onPress}>
			<AntDesign name={name} size={24} color={theme.higherTone} />
		</Key>
	);

	return (
		<Container>
			<TitleContainer>
				<Title>{title}</Title>
				{subtitle && <Key>{subtitle}</Key>}
				<ButtonsContainer>
					{onEditButton && <Button name='edit' onPress={onEditButton} />}
					{onDeleteButton && <Button name='delete' onPress={onDeleteButton} />}
				</ButtonsContainer>
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
