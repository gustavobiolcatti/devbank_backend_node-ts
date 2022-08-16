import { MigrationInterface, QueryRunner } from "typeorm";

export class addAccountBalance1660602550961 implements MigrationInterface {
    name = 'addAccountBalance1660602550961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" ADD "balance" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "balance"`);
    }

}
