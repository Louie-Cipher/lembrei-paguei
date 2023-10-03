export const dateToString = (date: Date) =>
	date.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});

export const stringToDate = (string: string) => {
	let date = new Date();
	let stringSplited = string.split('-');
	date.setDate(Number(stringSplited[2]));
	date.setMonth(Number(stringSplited[1]) - 1);
	date.setFullYear(Number(stringSplited[0]));

	return date;
}

export const dbDateString = (string: string) =>
	dateToString(stringToDate(string));