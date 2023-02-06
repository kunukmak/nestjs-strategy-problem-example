import { Module } from '@nestjs/common';
import { AnimalModule } from '../animal/animal.module';
import { CatStrategy } from '../animal/strategies/cat.strategy';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  imports: [AnimalModule.register(CatStrategy)],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
