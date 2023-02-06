import { Module } from '@nestjs/common';
import { AnimalModule } from '../animal/animal.module';
import { DogStrategy } from '../animal/strategies/dog.strategy';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  imports: [AnimalModule.register(DogStrategy)],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
