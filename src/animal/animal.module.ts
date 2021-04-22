import { Module, DynamicModule } from '@nestjs/common';
import { AnimalService } from './animal.service';

@Module({})
export class AnimalModule {
    static register(strategy): DynamicModule {
        return {
            module: AnimalModule,
            providers: [{ provide: 'STRATEGY', useValue: strategy }, AnimalService],
            imports: [],
            exports: [AnimalService]
        };
    }
}