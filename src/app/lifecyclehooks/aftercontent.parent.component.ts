import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-content-parent',
  template: `
      <div class="parent">
      <h2>{{title}}</h2>
      <div *ngIf="show">
      <after-content>
        <my-child-view></my-child-view>
      </after-content>
      </div>
      <p><button class="redbtn" (click)="reset()">Reset</button></p>
      <div *ngFor="let msg of logs">{{msg}}</div>
      </div>
  `,
  styles:   [
    '.parent {background: #C00000; color: #ffffff; margin-bottom: 10px; margin-top: 10px;}',
    '.redbtn {background: #D80000; color: #ffffff;}'],
    providers: [LoggerService]
})
export class AfterContentParentComponent {
   title = 'AfterContent';
    logs: string[] = [];
    show = true;
    constructor(private logger: LoggerService){
        this.logs = logger.logs;
    }
    reset() {
        this.logs.length = 0;
        //quickly remove and reload afterview component which recreates it
        this.show = false;
        this.logger.tick_then(() => this.show = true);
    }
}
