import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1660850315239 implements MigrationInterface {
    name = 'createTables1660850315239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "accountAccountNumber" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_9406e650e18da80a6ad5c2f306" UNIQUE ("accountAccountNumber"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("accountNumber" SERIAL NOT NULL, "agency" integer NOT NULL DEFAULT '1234', "balance" real NOT NULL DEFAULT '0', "created_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ee66d482ebdf84a768a7da36b08" PRIMARY KEY ("accountNumber"))`);
        await queryRunner.query(`CREATE TABLE "operation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sender" integer NOT NULL, "receiver" integer NOT NULL, "value" numeric NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2474a7aaa04e0537991f6b96145" PRIMARY KEY ("id", "sender", "receiver"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9406e650e18da80a6ad5c2f3066" FOREIGN KEY ("accountAccountNumber") REFERENCES "account"("accountNumber") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9406e650e18da80a6ad5c2f3066"`);
        await queryRunner.query(`DROP TABLE "operation"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
