import { Test, TestingModule } from '@nestjs/testing';
import { ImpresoraController } from './impresora.controller';

describe('ImpresoraController', () => {
  let controller: ImpresoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpresoraController],
    }).compile();

    controller = module.get<ImpresoraController>(ImpresoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
