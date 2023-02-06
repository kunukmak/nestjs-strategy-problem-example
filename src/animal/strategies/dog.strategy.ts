import { Injectable } from '@nestjs/common';
import { IAnimalStrategy } from './animalStrategy';

export class DogStrategy implements IAnimalStrategy {
  makeSound(): string {
    return 'wow';
  }
}
