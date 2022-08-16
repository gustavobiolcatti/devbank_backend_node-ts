import { MigrationInterface, QueryRunner } from "typeorm";

export class relationUserAccount1660600880192 implements MigrationInterface {
    name = 'relationUserAccount1660600880192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "accountId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_68d3c22dbd95449360fdbf7a3f" UNIQUE ("accountId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "agency" integer NOT NULL DEFAULT '1234', "account_number" bigint NOT NULL, "account_digit" smallint NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_c91a92631ee1ccb9f29e599ba42" UNIQUE ("account_number"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_68d3c22dbd95449360fdbf7a3f1" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_68d3c22dbd95449360fdbf7a3f1"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
