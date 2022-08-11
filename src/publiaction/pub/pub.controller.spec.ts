import { Test, TestingModule } from '@nestjs/testing';
import { PubController } from './pub.controller';

describe('PubController', () => {
  let controller: PubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PubController],
    }).compile();

    controller = module.get<PubController>(PubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
