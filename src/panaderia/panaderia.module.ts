import { Module } from '@nestjs/common';
import { PanaderiaService } from './panaderia.service';
import { PanaderiaController } from './panaderia.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PanaderiaService],
  controllers: [PanaderiaController],
  imports: [PrismaModule],
})
export class PanaderiaModule {}
