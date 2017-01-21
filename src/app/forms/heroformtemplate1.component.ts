import { Component } from '@angular/core';

import { Hero } from './hero';


@Component({
  selector: 'hero-form-template1',
  templateUrl: './heroformtemplate1.component.html'
})
export class HeroFormTemplate1Component {

    powers = ['Really Smart', 'Top Killer', 'Super Flexible', 'Sexy Body', 'Game Changer'];

    model = new Hero(1, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true;}

    get diagnostic() { return JSON.stringify(this.model); }

}
