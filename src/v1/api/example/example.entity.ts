import { Column, Entity, Repository, PrimaryColumn } from "typeorm";
import { RepositoryKeys } from "v1/tests/mocks/repository";

@Entity()
export class ExampleEntity {
	@PrimaryColumn()
	public id: string;

	@Column()
	public exampleField: string;
}

export type ExampleRepository = Pick<Repository<ExampleEntity>, RepositoryKeys>;
