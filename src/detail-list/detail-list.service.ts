import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAlarmDto, UpdateAlarmDto } from './dto/alarm.dto';
import { Alarm } from './entities/alarm.entity';

@Injectable()
export class DetailListService {
  constructor(
    @Inject('ALARM_REPOSITORY')
    private detaillistRepository: Repository<Alarm>,
  ) {}

  async getAll(): Promise<Alarm[]> {
    return this.detaillistRepository.find();
  }

  async getOne(id: string): Promise<Alarm> {
    return this.detaillistRepository.findOne({ where: { id: id } });
  }

  async create(alarmData: CreateAlarmDto): Promise<string> {
    await this.detaillistRepository.insert(alarmData);
    return 'Create Success';
  }

  async delete(id: string): Promise<string> {
    const deleteAlarm = await this.detaillistRepository.softDelete({ id: id });
    //삭제 0 이면 실패, 1이면 성공
    if (deleteAlarm.affected === 0) {
      throw new NotFoundException('Delete Fail');
    }
    return 'Delete Success';
  }

  async update(id: string, updateData: UpdateAlarmDto): Promise<string> {
    await this.detaillistRepository.update(id, updateData);
    return 'update Success';
  }
}
