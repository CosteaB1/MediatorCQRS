import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
    providedIn: 'root'
})
export class AppCounterService {
    constructor(private logService: LogService) {
    }
    counter = 0;
    increase(): any {
        this.logService.log('increase counter ...');
        this.counter++;
    }
    decrease(): any {
        this.logService.log('decrease counter ...');
        this.counter--;
    }
}
