export const numberToReal = (number: number) =>
	number.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});
