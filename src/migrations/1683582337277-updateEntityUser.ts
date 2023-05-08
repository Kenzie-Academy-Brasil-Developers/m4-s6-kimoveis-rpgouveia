import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntityUser1683582337277 implements MigrationInterface {
    name = 'UpdateEntityUser1683582337277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP NOT NULL`);
    }

}
