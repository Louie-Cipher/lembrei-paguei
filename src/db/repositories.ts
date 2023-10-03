import { Repository } from 'typeorm/browser';
import { DB } from '.';
import { Conta, Gasto, Meta, Settings, Valores } from './entities';

export class SettingsRepository extends Repository<Settings> {
	constructor() {
		super(Settings, DB.manager);
	}

	async findOrCreate(): Promise<Settings> {
		let settings = await this.findOneBy({ id: 1 });
		if (!settings) {
			settings = new Settings();
			settings.id = 1;
			await this.save(settings);
		}
		return settings;
	}
}

export class ValoresRepository extends Repository<Valores> {
	constructor() {
		super(Valores, DB.manager);
	}

	async findOrCreate(): Promise<Valores> {
		let valores = await this.findOneBy({ id: 1 });
		if (!valores) {
			valores = new Valores();
			valores.id = 1;
			await this.save(valores);
		}
		return valores;
	}
}

export const ContaRepository = new Repository(Conta, DB.manager);
export const GastoRepository = new Repository(Gasto, DB.manager);
export const MetaRepository = new Repository(Meta, DB.manager);
