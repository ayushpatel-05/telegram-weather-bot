import { MigrationInterface, QueryRunner } from "typeorm";

export class SubscriptionTable1732814479684 implements MigrationInterface {
    name = 'SubscriptionTable1732814479684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."Subscriptions_frequency_enum" AS ENUM('daily', 'hourly')`);
        await queryRunner.query(`CREATE TABLE "Subscriptions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "location" character varying NOT NULL, "frequency" "public"."Subscriptions_frequency_enum" NOT NULL DEFAULT 'daily', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6606e38052158bc22bee91f6bab" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Subscriptions"`);
        await queryRunner.query(`DROP TYPE "public"."Subscriptions_frequency_enum"`);
    }

}
