import { Component, ViewChild } from '@angular/core';
import { DoCheckComponent } from './docheck.component';
import { Hero } from './hero';
@Component({
  selector: 'do-check-parent',
  templateUrl: './docheck.parent.component.html',
  styles:   [
    '.parent {background: #B80000; color: #ffffff; margin-bottom: 10px;}',
    '.redbtn {background: #C80000; color: #ffffff;}']
})
export class DoCheckParentComponent {
  hero: Hero;
  power: string;

  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;

  constructor() { this.reset();}

  reset() {
    this.hero = new Hero('Wonderwoman');
    this.power = 'code';
    if (this.childView) { this.childView.reset();}
  }
}
