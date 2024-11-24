import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;
}

//Why "!""
// The ! operator tells TypeScript that you are confident the property will be initialized (by TypeORM in this case), even though it 
// is not explicitly initialized in the class.
// For entities in TypeORM, the values are typically assigned by the ORM itself (e.g., via the database or during object creation). 
// Therefore, you can safely use the ! operator to indicate to TypeScript that the property will be initialized by the ORM.

//Another solution could have been to make a constructer to assign a value and in datasource config option set 
//entitySkipConstructor: true
//It indicates that TypeORM will skip constructors when deserializing entities from the database
//https://github.com/typeorm/typeorm/issues/9111