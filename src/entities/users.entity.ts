import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";
import Schedule from "./schedules.entity";

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number
  @Column({type: 'varchar', length: 45})
  nome: string
  @Column({type: 'varchar', length: 45, unique: true})
  email: string
  @Column({type: 'boolean', default: false, nullable: true})
  admin: boolean
  @Column({type: 'varchar', length: 120})
  password: string
  @CreateDateColumn()
  createdAt: string | Date
  @UpdateDateColumn()
  updatedAt: string | Date
  @DeleteDateColumn({nullable: true})
  deletedAt: string | Date | null | undefined
  @OneToMany(() => Schedule, schedule => schedule.user)
  schedules: Schedule[]
}

export default User