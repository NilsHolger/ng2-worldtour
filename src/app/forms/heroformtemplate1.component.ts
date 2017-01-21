import { Component } from '@angular/core';

import { Hero } from './hero';


@Component({
  selector: 'hero-form-template1',
  templateUrl: './heroformtemplate1.component.html'
})
export class HeroFormTemplate1Component {
    title = 'Hero Form 1(template)';

    powers = ['Really Smart', 'Top Killer', 'Super Flexible', 'Sexy Body', 'Game Changer'];

    model = new Hero(3, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true;}

    newHero() {
      this.model = new Hero(42, '', '');
      this.submitted = false;
    }

    get diagnostic() { return JSON.stringify(this.model); }

}
