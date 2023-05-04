import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./addresses.entity";


@Entity('real_state')
class RealState {
  @PrimaryGeneratedColumn('increment')
  id: number
  @Column({type: 'boolean', default: false, nullable: true})
  sold: boolean
  @Column({type: 'decimal', precision: 12, scale: 2, default: 0})
  value: number
  @Column({type: 'int'})
  size: number
  @CreateDateColumn()
  createdAt: string | Date
  @UpdateDateColumn()
  updatedAt: string | Date
  @OneToOne(() => Address)
  @JoinColumn()
  address: Address
}

export default RealState