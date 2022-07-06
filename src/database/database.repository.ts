import { Alarm } from 'src/detail-list/entities/alarm.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'bo',
        password: '1234',
        database: 'note',
        entities: [Alarm],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
