import { Test, TestingModule } from '@nestjs/testing';
import { ImpresoraService } from './impresora.service';

describe('ImpresoraService', () => {
  let service: ImpresoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpresoraService],
    }).compile();

    service = module.get<ImpresoraService>(ImpresoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
