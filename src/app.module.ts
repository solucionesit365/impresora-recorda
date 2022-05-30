import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImpresoraController } from './impresora/impresora.controller';
import { ImpresoraService } from './impresora/impresora.service';

@Module({
  imports: [],
  controllers: [AppController, ImpresoraController],
  providers: [AppService, ImpresoraService],
})
export class AppModule {}
