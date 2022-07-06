import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DetailListModule } from './detail-list/detail-list.module';
import { alarmProviders } from './detail-list/detail-list.provider';

@Module({
  imports: [DetailListModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...alarmProviders],
})
export class AppModule {}
