import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  BeforeInsert,
} from "typeorm";
import Schedule from "./schedules.entity";
import * as bcrypt from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ type: "varchar", length: 45 })
  name: string;
  @Column({ type: "varchar", length: 45, unique: true })
  email: string;
  @Column({ type: "boolean", default: false, nullable: true })
  admin: boolean | null | undefined;
  @Column({ type: "varchar", length: 120 })
  password: string;
  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;
  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date;
  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string | Date | null | undefined;
  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];
  @BeforeInsert()
  hashUserPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}

export default User;