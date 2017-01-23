import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'on-changes',
  template: `
      <div class="hero">
      <p>{{hero.name}} can {{power}}</p>

      <h4>--- Change Log ---</h4>
      <div *ngFor="let chg of changeLog">{{chg}}</div>
      </div>
  `,
  styles: [
    '.hero {background: #900000; color: #ffffff; padding: 8px; margin-top: 8px;}',
    'p {background: #F00000; color: #ffffff; padding: 8px; margin-top: 8px;}'
  ]
})
export class OnChangesComponent implements OnChanges {
      @Input() hero: Hero;
      @Input() power: string;

      changeLog: Array<string> = [];

      ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes){
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
      }
      reset() { this.changeLog.length = 0;}
}
