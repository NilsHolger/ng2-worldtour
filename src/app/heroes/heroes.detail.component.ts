import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from './hero';


@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes.detail.component.html',
  styleUrls: ['./heroes.detail.component.css']
})
export class HeroesDetailComponent {
  @Input()
  hero: Hero;

  constructor(private location: Location){ }

  goBack(): void {
    this.location.back();
}

}
