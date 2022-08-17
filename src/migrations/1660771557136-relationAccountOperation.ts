import { MigrationInterface, QueryRunner } from "typeorm";

export class relationAccountOperation1660771557136 implements MigrationInterface {
    name = 'relationAccountOperation1660771557136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_68d3c22dbd95449360fdbf7a3f1"`);
        await queryRunner.query(`ALTER TABLE "account" RENAME COLUMN "account_number" TO "accountNumber"`);
        await queryRunner.query(`ALTER TABLE "account" RENAME CONSTRAINT "UQ_c91a92631ee1ccb9f29e599ba42" TO "UQ_ee66d482ebdf84a768a7da36b08"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "accountAccountNumber" integer`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea"`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "PK_44c1ea491eaddfa26c818e38816" PRIMARY KEY ("id", "accountNumber")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_68d3c22dbd95449360fdbf7a3f"`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "UQ_ee66d482ebdf84a768a7da36b08"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "account_accountNumber_seq" OWNED BY "account"."accountNumber"`);
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "accountNumber" SET DEFAULT nextval('"account_accountNumber_seq"')`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_158e945643bf64e0dbbf44e2cc" UNIQUE ("accountId", "accountAccountNumber")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_158e945643bf64e0dbbf44e2cc9" FOREIGN KEY ("accountId", "accountAccountNumber") REFERENCES "account"("id","accountNumber") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_158e945643bf64e0dbbf44e2cc9"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "REL_158e945643bf64e0dbbf44e2cc"`);
        await queryRunner.query(`ALTER TABLE "account" ALTER COLUMN "accountNumber" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "account_accountNumber_seq"`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "UQ_ee66d482ebdf84a768a7da36b08" UNIQUE ("accountNumber")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "REL_68d3c22dbd95449360fdbf7a3f" UNIQUE ("accountId")`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "PK_44c1ea491eaddfa26c818e38816"`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "accountAccountNumber"`);
        await queryRunner.query(`ALTER TABLE "account" RENAME CONSTRAINT "UQ_ee66d482ebdf84a768a7da36b08" TO "UQ_c91a92631ee1ccb9f29e599ba42"`);
        await queryRunner.query(`ALTER TABLE "account" RENAME COLUMN "accountNumber" TO "account_number"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_68d3c22dbd95449360fdbf7a3f1" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
