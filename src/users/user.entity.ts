import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique:true})
  username: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @Column({ type: 'simple-array', default: ['active'] })
  status: string[];

//   idRoles;
//   idMerchant;

  constructor() {
    if (!this.id) {
      this.id = uuidv4(); // Asignar un UUID cuando se crea una nueva instancia
    }
  }
}
