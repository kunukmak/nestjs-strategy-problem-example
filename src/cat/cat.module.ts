import { Module } from '@nestjs/common';
import { AnimalModule } from '../animal/animal.module'
import { catStrategy } from '../animal/strategies/cat.strategy';
import { CatController } from './cat.controller'
import { CatService } from './cat.service';

@Module({
    imports: [
        AnimalModule.register(catStrategy),
    ],
    controllers: [CatController],
    providers: [CatService],
})
export class CatModule {}
