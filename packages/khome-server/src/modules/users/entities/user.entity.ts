import { Column, Entity } from 'typeorm';

@Entity()
export class User {
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;
}
