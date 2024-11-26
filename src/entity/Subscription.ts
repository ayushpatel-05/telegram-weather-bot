import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('Subscriptions')
export class Subscription {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    userId!: string;

    @Column()
    location!: string;

    @Column({
        type: "enum",
        enum: ["daily", "hourly"],
        default: "daily",
    })
    frequency!: string;//Make it enum

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}