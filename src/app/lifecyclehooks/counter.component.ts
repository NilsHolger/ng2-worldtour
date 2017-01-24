import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="counter">
    Counter = {{counter}}

    <h5>-- Counter Change Log --</h5>
    <div *ngFor="let chg of changeLog" mySpy>{{chg}}</div>
  </div>
  `,
  styles: ['.counter {background: #ff8a80; padding: 8px; margin-top: 8px}']
})
export class CounterComponent implements OnChanges {
  @Input() counter: number;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {

    // empty  changeLog whenever counter goes to zero
    // hint: this is a way to respond programmatically to external value changes.
    if (this.counter === 0) {
      this.changeLog.length = 0;
    }

    // a change to counter is the only change we care about
    let chng = changes['counter'];
    let cur = chng.currentValue;
    let prev = JSON.stringify(chng.previousValue); // first time is {}; after is integer
    this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
