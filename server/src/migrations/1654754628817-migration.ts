import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1654754628817 implements MigrationInterface {
    name = 'migration1654754628817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "note" (
                "id" SERIAL NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "name" character varying NOT NULL,
                "text" character varying NOT NULL,
                CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "note"
        `);
    }

}
