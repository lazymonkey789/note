import { Test, TestingModule } from '@nestjs/testing';
import { DetailListController } from './detail-list.controller';

describe('DetailListController', () => {
  let controller: DetailListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailListController],
    }).compile();

    controller = module.get<DetailListController>(DetailListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
