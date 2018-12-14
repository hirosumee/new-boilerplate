import { Document } from 'mongoose';

export interface IEntityService<T extends Document> {
	create(dto: object): Promise<T>;
	findById(id: string): Promise<T>;
	findOne(query: object): Promise<T>;
	find(query: object): Promise<T[]>;
}
