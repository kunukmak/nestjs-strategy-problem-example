import { Injectable } from '@nestjs/common';

export abstract class IAnimalStrategy {
  abstract makeSound(): string;
}
