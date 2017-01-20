import { Component } from '@angular/core';

import { TechnologiesService } from './animations.service';

@Component({
  selector: 'technology-team-builder',
  template: `
          <div class="buttons buttons-margin-top">
              <button [disabled]="!technologies.canAdd()" (click)="technologies.addInactive()">Add Inactive Animation</button>
              <button [disabled]="!technologies.canAdd()" (click)="technologies.addActive()">Add Active Animation</button>
              <button [disabled]="!technologies.canRemove()" (click)="technologies.remove()">Remove Animation</button>
          </div>
          <div class="columns buttons">
                <div class="column">
                    <transition-enterleave class="transitionstyle" [technologies]=technologies></transition-enterleave>
                </div>
          </div>
  `,
  styles: [`
          .buttons {
            text-align: center;
          }
          button {
            padding: 1.5em 3em;
            background-color: #ee6e73;
            color: #ffffff;
          }
          .columns {
            display: flex;
            flex-direction: row
          }
          .column {
            flex: 1;
            padding: 10px;
          }
          .column p {
            min-height: 6em;
          }
          .transitionstyle {
            position: relative;
            left: 45%;
          }
    `],
    providers: [TechnologiesService]
})
export class TransitionsEnterLeaveHostComponent {
  constructor(private technologies: TechnologiesService) {}
}
