import { Field, Int, ObjectType } from 'type-graphql';
import {
  Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity,
} from 'typeorm';

@ObjectType()
@Entity()
class Note extends BaseEntity {
  @Field(() => Int)
  @PrimaryColumn()
    id: number;

  @Field(() => String)
  @CreateDateColumn()
    createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
    updatedAt: Date;

  @Field(() => String)
  @Column()
    text: String;
}

export default Note;
