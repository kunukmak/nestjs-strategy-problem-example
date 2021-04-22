import { Module } from '@nestjs/common';
import { AnimalModule } from '../animal/animal.module'
import { dogStrategy } from '../animal/strategies/dog.strategy';
import { DogController } from './dog.controller'
import { DogService } from './dog.service';

@Module({
    imports: [
        AnimalModule.register(dogStrategy),
    ],
    controllers: [DogController],
    providers: [DogService],
})
export class DogModule {}
