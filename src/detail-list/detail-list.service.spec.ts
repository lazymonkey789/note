import { Test, TestingModule } from '@nestjs/testing';
import { DetailListService } from './detail-list.service';

describe('DetailListService', () => {
  let service: DetailListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailListService],
    }).compile();

    service = module.get<DetailListService>(DetailListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
