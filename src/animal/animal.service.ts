import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {
    constructor (@Inject('STRATEGY') private strategy) {
        this.strategy = strategy
    }

    public makeSound() {
        return this.strategy.makeSound()
    }
}
