import { DataSource } from 'typeorm';
import { Alarm } from './entities/alarm.entity';

export const alarmProviders = [
  {
    provide: 'ALARM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Alarm),
    inject: ['DATA_SOURCE'],
  },
];
