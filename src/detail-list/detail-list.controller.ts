import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { DetailListService } from './detail-list.service';
import { CreateAlarmDto } from './dto/alarm.dto';
import { Alarm } from './entities/alarm.entity';

@Controller('detail-list')
export class DetailListController {
  constructor(private readonly detaillistService: DetailListService) {}

  @Get()
  getAll(): Promise<Alarm[]> {
    return this.detaillistService.getAll();
  }

  @Get('search')
  search(@Query(`title`) searchingTilte: string) {
    return `search title : ${searchingTilte}`;
  }

  @Get('/:id')
  getOne(@Param('id') alarmId: string): Promise<Alarm> {
    return this.detaillistService.getOne(alarmId);
  }

  @Post()
  create(@Body() alarmData: CreateAlarmDto) {
    return this.detaillistService.create(alarmData);
  }

  @Delete('/:id')
  delete(@Param('id') alarmId: string) {
    return this.detaillistService.delete(alarmId);
  }

  @Patch('/:id')
  update(@Param('id') alarmId: string, @Body() updateData) {
    return this.detaillistService.update(alarmId, updateData);
  }
}
