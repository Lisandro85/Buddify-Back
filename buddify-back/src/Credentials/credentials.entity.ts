import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../modules/Users/users.entity';

@Entity()
export class Credentials {
  @PrimaryGeneratedColumn()
  id: string;

  /**
   * Nombre de usuario o email del usuario que está intentando iniciar sesión
   */
  @Column({
    type: 'varchar',
    length: 150,
    nullable: false,
    unique: true,
  })
  username: string;

  /**
   * Contraseña del usuario
   */
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  password: string;

  /**
   * Relación de uno a uno con la entidad de usuario.
   */
  @OneToOne(() => Users, (user) => user.credential)
  user: Users;
}
