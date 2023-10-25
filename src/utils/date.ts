export const dateToString = (date: Date) =>
	date.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});

export const stringToDate = (string: string) => {
	let date = new Date();
	const stringSplitted = string.split('-');
	date.setDate(Number(stringSplitted[2]));
	date.setMonth(Number(stringSplitted[1]) - 1);
	date.setFullYear(Number(stringSplitted[0]));

	return date;
};

export const dbDateString = (string: string) => dateToString(stringToDate(string));
