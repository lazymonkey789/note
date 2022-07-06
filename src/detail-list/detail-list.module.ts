import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DetailListController } from './detail-list.controller';
import { alarmProviders } from './detail-list.provider';
import { DetailListService } from './detail-list.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DetailListController],
  providers: [DetailListService, ...alarmProviders],
})
export class DetailListModule {}
