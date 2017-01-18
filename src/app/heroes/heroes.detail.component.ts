import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes.detail.component.html',
  styleUrls: ['./heroes.detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute,
     private location: Location){ }

     ngOnInit(): void{
       //this.activatedRoute.params.switchMap((params: Params) =>
       //this.heroService.getHero(+params['id']))
       //.subscribe(hero => this.hero = hero);
     }

  save(): void {
    this.heroService.update(this.hero).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
}

}
