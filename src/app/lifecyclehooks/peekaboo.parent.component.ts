import { Component } from '@angular/core';
import { LoggerService } from './logger.service';



@Component({
  selector: 'peek-a-boo-parent',
  template: `
        <div class="parent">
        <h2>Free World for Future Generations</h2>

        <button class="redbtn" (click)="toggleChild()">
          {{hasChild ? 'Destroy' : 'Create'}} Better World
        </button>
        <button class="redbtn" (click)="updateEnemy()" [hidden]="!hasChild">Update Enemy</button>

        <peek-a-boo *ngIf="hasChild" [name]="enemyName"></peek-a-boo>

        <h4>--- Lifecycle Hook Log ---</h4>
        <div *ngFor="let msg of hookLog">{{msg}}</div>
        </div>
  `,
  styles: [`.parent {background: #F80000; color: #ffffff;}
    .redbtn {background: #F80000; color: #ffffff;}`],
  providers: [LoggerService]
})
export class PeekABooParentComponent {
    hasChild = false;
    hookLog: Array<string>;

    enemyName = 'microsoft';
    private logger: LoggerService;

    constructor(logger: LoggerService){
      this.logger = logger;
      this.hookLog = logger.logs;
    }
    toggleChild(){
      this.hasChild = !this.hasChild;
      if (this.hasChild) {
        this.enemyName = 'microsoft';
        this.logger.clear(); //clear log on create
      }
      this.logger.tick();
    }
    updateEnemy(){
      this.enemyName += '!';
      this.logger.tick();
    }
}
