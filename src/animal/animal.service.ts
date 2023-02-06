import { Injectable, Inject, Scope } from '@nestjs/common';
import { IAnimalStrategy } from './strategies/animalStrategy';

@Injectable()
export class AnimalService {
  constructor(private readonly strategy: IAnimalStrategy) {
    this.strategy = strategy;
  }

  public makeSound() {
    return this.strategy.makeSound();
  }
}
