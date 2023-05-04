import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";


@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number
  @Column({type: 'date'})
  date: string | Date
  @Column({type: 'time'})
  hour: string
  @ManyToOne(() => User, user => user.schedules)
  user: User
}

export default Schedule