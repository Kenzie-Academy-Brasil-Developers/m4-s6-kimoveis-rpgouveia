import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./addresses.entity";


@Entity('real_estate')
class RealEstate {
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
  @OneToOne(() => Address, address => address.realState )
  @JoinColumn()
  address: Address
}

export default RealEstate