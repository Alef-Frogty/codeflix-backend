import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  BirthDate: Date;

  @Column({ length: 500 })
  Email: string;

  @Column()
  EmailConfirmed: boolean;

  @Column({ length: 500 })
  Password: string;

 @Column({ length: 500 })
     PasswordConfirmed: string;

}