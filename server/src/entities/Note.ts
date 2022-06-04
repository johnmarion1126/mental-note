import { Field, Int, ObjectType } from 'type-graphql';
import {
  Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
class Note extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
    id: number;

  @Field(() => String)
  @CreateDateColumn()
    createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
    updatedAt: Date;

  @Field(() => String)
  @Column()
    name: String;

  @Field(() => String)
  @Column()
    text: String;
}

export default Note;
