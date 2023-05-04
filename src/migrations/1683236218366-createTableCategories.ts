import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCategories1683236218366 implements MigrationInterface {
    name = 'CreateTableCategories1683236218366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "categories" (
                "id" SERIAL NOT NULL, 
                "name" character varying(45) NOT NULL, 
                CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), 
                CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
