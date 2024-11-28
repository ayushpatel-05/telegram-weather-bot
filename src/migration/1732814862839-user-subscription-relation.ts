import { MigrationInterface, QueryRunner } from "typeorm";

export class UserSubscriptionRelation1732814862839 implements MigrationInterface {
    name = 'UserSubscriptionRelation1732814862839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Subscriptions" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "Subscriptions" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "Subscriptions" ADD CONSTRAINT "FK_124c5ebc95436408577026acbf3" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Subscriptions" DROP CONSTRAINT "FK_124c5ebc95436408577026acbf3"`);
        await queryRunner.query(`ALTER TABLE "Subscriptions" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "Subscriptions" ADD "userId" character varying NOT NULL`);
    }

}
