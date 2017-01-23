import { Directive, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from './logger.service';

let nextId = 1;

//spy on any element to which it is applied
//usage: <div mySpy>...</div>
@Directive({selector: '[mySpy]'})
export class SpyDirective implements OnInit, OnDestroy {

      constructor(private logger: LoggerService) {}
      private logIt(msg: string) {
        this.logger.log(`Spy #${nextId++} ${msg}`);
      }
      ngOnInit() { this.logIt(`onInit`);}
      ngOnDestroy() { this.logIt(`onDestroy`);}
}
