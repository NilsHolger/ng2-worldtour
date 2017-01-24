import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'counter-parent',
  template: `
   <div class="parent">
    <h2>Counter Spy</h2>

    <button class="redbtn" (click)="updateCounter()">Update counter</button>
    <button class="redbtn" (click)="reset()">Reset Counter</button>

    <app-counter [counter]="value"></app-counter>

    <h4>-- Spy Lifecycle Hook Log --</h4>
    <div *ngFor="let msg of spyLog">{{msg}}</div>
   </div>
  `,
  styles: ['.parent {background: #ff1744; color: #ffffff; margin-bottom: 10px;}',
            '.redbtn {background: #c62828; color: #ffffff; }'],
  providers: [LoggerService]
})
export class CounterParentComponent {
  value: number;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.value = 0;
    this.logger.tick();
  }
}
