import { Component, ViewChild } from '@angular/core';
import { OnChangesComponent } from './onchanges.component';
import { Hero } from './hero';


@Component({
  selector: 'on-changes-parent',
  templateUrl: './onchanges.parent.component.html',
  styles: ['.parent {background:#780000; color: #ffffff; margin-bottom:10px; }',
            '.redbtn {background: #C80000; color: #ffffff;}']
})
export class OnChangesParentComponent {
      hero: Hero;
      power: string;
      title = 'OnChanges ~ \'good artists copy, great artists steal\' Jobs';
      @ViewChild(OnChangesComponent) childView: OnChangesComponent;
      constructor(){
        this.reset();
      }
      reset(){
        //new hero object every time; triggers onchanges
        this.hero = new Hero('You');
        //setting power only triggers onchanges if this value is different
        this.power = 'killBill';
        if (this.childView) {this.childView.reset();}
      }
}
