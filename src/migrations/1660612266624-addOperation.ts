import { MigrationInterface, QueryRunner } from "typeorm";

export class addOperation1660612266624 implements MigrationInterface {
    name = 'addOperation1660612266624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "PK_2474a7aaa04e0537991f6b96145"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "PK_98bba7cbcdb97eb51ae9f344861" PRIMARY KEY ("id", "sender")`);
        await queryRunner.query(`ALTER TABLE "operation" DROP COLUMN "receiver"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD "receiver" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "PK_98bba7cbcdb97eb51ae9f344861"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "PK_2474a7aaa04e0537991f6b96145" PRIMARY KEY ("id", "sender", "receiver")`);
        await queryRunner.query(`ALTER TABLE "operation" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD "value" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operation" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "PK_2474a7aaa04e0537991f6b96145"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "PK_98bba7cbcdb97eb51ae9f344861" PRIMARY KEY ("id", "sender")`);
        await queryRunner.query(`ALTER TABLE "operation" DROP COLUMN "receiver"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD "receiver" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operation" DROP CONSTRAINT "PK_98bba7cbcdb97eb51ae9f344861"`);
        await queryRunner.query(`ALTER TABLE "operation" ADD CONSTRAINT "PK_2474a7aaa04e0537991f6b96145" PRIMARY KEY ("id", "sender", "receiver")`);
    }

}
