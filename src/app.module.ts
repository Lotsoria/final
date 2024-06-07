import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PanaderiaModule } from './panaderia/panaderia.module';

@Module({
  imports: [PanaderiaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
