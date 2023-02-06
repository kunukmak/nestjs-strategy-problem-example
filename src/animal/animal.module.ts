import { Module, DynamicModule, Scope, forwardRef } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { IAnimalStrategy } from './strategies/animalStrategy';
import { CatStrategy } from './strategies/cat.strategy';
import { DogStrategy } from './strategies/dog.strategy';

@Module({})
export class AnimalModule {
  static register(strategy): DynamicModule {
    console.log('registering ');
    console.log(strategy);
    return {
      module: AnimalModule,
      providers: [
        {
          useClass: strategy,
          provide: IAnimalStrategy,
        },
        AnimalService,
      ],
      imports: [],
      exports: [AnimalService],
    };
  }
}
