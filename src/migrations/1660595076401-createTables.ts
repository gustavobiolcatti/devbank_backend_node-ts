import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1660595076401 implements MigrationInterface {
    name = 'createTables1660595076401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, "email" character varying NOT NULL, "cpf" integer NOT NULL, "password" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
