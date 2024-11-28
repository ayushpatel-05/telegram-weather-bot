// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
// import { User } from "./User.js";

// @Entity('Subscriptions')
// export class Subscription {
//     @PrimaryGeneratedColumn('uuid')
//     id!: string;

//     @Column()
//     userId!: string;

//     @Column()
//     location!: string;

//     @Column({
//         type: "enum",
//         enum: ["daily", "hourly"],
//         default: "daily",
//     })
//     frequency!: string;

//     @CreateDateColumn()
//     createdAt!: Date;

//     @UpdateDateColumn()
//     updatedAt!: Date;

//     @ManyToOne(() => User)
//     user!: User;
// }

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User.js";

@Entity('Subscriptions')
export class Subscription {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    // @Column({type: "varchar", length: 250})
    // userId!: string;

    @Column({type: "varchar", length: 250})
    location!: string;

    @Column({
        type: "enum",
        enum: ["daily", "hourly"],
        default: "daily",
    })
    frequency!: string;

    @CreateDateColumn({type:"date"})
    createdAt!: Date;

    @UpdateDateColumn({type:"date"})
    updatedAt!: Date;

    @ManyToOne(() => User)
    user!: User;
}

/* 
C:\Users\ayush\Desktop\Side Projects\Telegram Weather Bot(Assignment)\node_modules\typeorm\data-source\DataSource.js
C:\Users\ayush\Desktop\Side Projects\Telegram Weather Bot(Assignment)\node_modules\typeorm\connection\ConnectionMetadataBuilder.js
C:\Users\ayush\Desktop\Side Projects\Telegram Weather Bot(Assignment)\node_modules\typeorm\util\DirectoryExportedClassesLoader.js
C:\Users\ayush\Desktop\Side Projects\Telegram Weather Bot(Assignment)\node_modules\typeorm\util\ApplyValueTransformers.js
C:\Users\ayush\Desktop\Side Projects\Telegram Weather Bot(Assignment)\node_modules\typeorm\util\ImportUtils.js

*/