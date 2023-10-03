import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm/browser';
import { DB } from '.';

@Entity({ name: 'conta' })
export class Conta {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar' })
	nome: string;

	@Column({ type: 'varchar' })
	categoria: string;

	@Column({ type: 'real' })
	valor: number;

	@Column({ type: 'date' })
	dataVencimento: Date | string;

	@Column({ type: 'date', nullable: true })
	dataPagamento: Date | string;
}

@Entity({ name: 'gasto' })
export class Gasto {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar' })
	nome: string;

	@Column({ type: 'varchar' })
	categoria: string;

	@Column({ type: 'real' })
	valor: number;

	@Column({ type: 'date' })
	data: Date | string;
}

@Entity({ name: 'meta' })
export class Meta {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar' })
	nome: string;

	@Column({ type: 'real' })
	valorTotal: number;

	@Column({ type: 'real' })
	valorAtual: number;
}

@Entity({ name: 'valores' })
export class Valores {
	@PrimaryColumn({ type: 'integer' })
	id: number;

	@Column({ type: 'real', default: 0 })
	limiteGastos: number;
}

@Entity({ name: 'settings' })
export class Settings {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar' })
	name: string;

	@Column({ type: 'varchar', nullable: true })
	profilePicturePath: string;

	@Column({ type: 'tinyint', default: 0 })
	theme: Theme;

	@Column({ type: 'varchar', default: 'pt-BR' })
	language: string;
}

export enum Theme {
	SYSTEM = 0,
	DARK = 1,
	LIGHT = 2,
	DARK_CONTRAST = 3,
	LIGHT_CONTRAST = 4,
}
