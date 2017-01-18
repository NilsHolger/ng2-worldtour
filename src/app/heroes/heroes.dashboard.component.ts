import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './heroes.dashboard.component.html'
})
export class HeroesDashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private location: Location){}

  ngOnInit(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 5));
  }
  goBack(): void {
    this.location.back();
  }

 }
