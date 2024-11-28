import { MigrationInterface, QueryRunner } from "typeorm";

export class SubscriptionTable1732695127811 implements MigrationInterface {
    name = 'SubscriptionTable1732695127811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."Subscriptions_frequency_enum" AS ENUM('daily', 'hourly')`);
        await queryRunner.query(`CREATE TABLE "Subscriptions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "location" character varying NOT NULL, "frequency" "public"."Subscriptions_frequency_enum" NOT NULL DEFAULT 'daily', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6606e38052158bc22bee91f6bab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "Subscriptions" ADD CONSTRAINT "FK_124c5ebc95436408577026acbf3" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Subscriptions" DROP CONSTRAINT "FK_124c5ebc95436408577026acbf3"`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "isActive" DROP DEFAULT`);
        await queryRunner.query(`DROP TABLE "Subscriptions"`);
        await queryRunner.query(`DROP TYPE "public"."Subscriptions_frequency_enum"`);
    }

}
