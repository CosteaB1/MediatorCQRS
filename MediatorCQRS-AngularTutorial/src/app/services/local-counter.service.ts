import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {

  counter = 0;
  increase(): any {
    this.counter++;
  }
  decrease(): any {
    this.counter--;
  }
}
