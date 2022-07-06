import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Alarm extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  LineNo: string;
  @Column()
  LineName: string;

  @Column()
  Worker: string;
  @Column({ type: 'tinyint' })
  OutCheck: number;
  @Column()
  Controller: string;
  @Column({ type: 'tinyint' })
  DellReport: number;
  @Column({ type: 'datetime' })
  ReportTime: Date;
  @Column({ type: 'datetime' })
  NmsTime: Date;
  @Column({ type: 'datetime' })
  FinishTime: Date;
  @Column()
  Spot: string;
  @Column()
  Cause: string;
  @Column()
  Content: string;
  @Column()
  Consider: string;
  @Column()
  Writer: string;

  @CreateDateColumn({ type: 'datetime' })
  CreateAt: Date;
  @UpdateDateColumn({ type: 'datetime' })
  UpdateTime: Date;
  @DeleteDateColumn({ type: 'datetime' })
  deletedAt: Date;
}
