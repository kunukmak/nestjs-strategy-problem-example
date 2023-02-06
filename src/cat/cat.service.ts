import { Injectable } from '@nestjs/common';
import { AnimalService } from '../animal/animal.service';

@Injectable()
export class CatService {
  constructor(private readonly animalService: AnimalService) {}

  public makeSound() {
    return this.animalService.makeSound();
  }
}
