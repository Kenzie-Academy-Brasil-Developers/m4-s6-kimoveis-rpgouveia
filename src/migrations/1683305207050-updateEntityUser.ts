import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntityUser1683305207050 implements MigrationInterface {
    name = 'UpdateEntityUser1683305207050'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                ALTER TABLE "users" 
                RENAME COLUMN "nome" TO "name"
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "name" TO "nome"`);
    }

}
