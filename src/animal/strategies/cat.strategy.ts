import { IAnimalStrategy } from './animalStrategy';

export class CatStrategy implements IAnimalStrategy {
  public makeSound(): string {
    return 'meow';
  }
}
