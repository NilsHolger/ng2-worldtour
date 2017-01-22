import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: 'herolist.component.html',
  styles: ['.error {color: red;}'],
  providers: [HeroesService]
})
export class HeroListComponent implements OnInit {
    errorMessage: string;
    heroes: Hero[];
    mode = 'Observable';

    constructor(private heroesService: HeroesService) {}

      ngOnInit(){
        this.getHeroes();
      }

      getHeroes() {
        this.heroesService.getHeroes()
                        .subscribe(
                          heroes => this.heroes = heroes,
                          error => this.errorMessage = <any>error);
      }

      addHero(name: string){
            if (!name) {return;}
            this.heroesService.addHero(name).subscribe(
                            hero => this.heroes.push(hero),
                            error => this.errorMessage = <any>error);

      }
}
