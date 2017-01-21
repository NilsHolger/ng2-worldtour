import { Component } from '@angular/core';

import { Hero } from './hero';


@Component({
  selector: 'hero-form-template1',
  templateUrl: './heroformtemplate1.component.html'
})
export class HeroFormTemplate1Component {
    title = 'Hero Form 1(template)';

    powers = ['Really Smart', 'Top Killer', 'Super Flexible', 'Sexy Body', 'Game Changer'];

    model = new Hero(3, 'Nils', this.powers[1], 'Flashlight');

    submitted = false;

    onSubmit() { this.submitted = true;}

    get diagnostic() { return JSON.stringify(this.model); }

}
