import { DataSource } from 'typeorm/browser';
import { Conta, Gasto, Meta, Valores, Settings } from './entities';

export const DB = new DataSource({
	type: 'expo',
	synchronize: true,
	database: 'lembrei-paguei.db',
	driver: require('expo-sqlite'),
	entities: [Conta, Gasto, Meta, Valores, Settings],
});
