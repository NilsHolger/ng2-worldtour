import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HeroSearchService } from './hero.search.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: 'hero.search.component.html',
  styleUrls: ['hero.search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
      heroes: Observable<Hero[]>;
      private searchTerms = new Subject<string>();
      show = true;
      constructor(private heroSearchService: HeroSearchService, private router: Router){ }

      //push a search term into the observable stream
      search(term: string){
        this.searchTerms.next(term);
      }

      ngOnInit(): void {
        this.heroes = this.searchTerms
        .debounceTime(300)            //wait for 300ms pause in events
        .distinctUntilChanged()       //ignore if next search term is same as previous
        .switchMap(term => term       //switch to new observable each time
        //return http search observable
        ? this.heroSearchService.search(term)
        //or an observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
        .catch(error => {
          //todo: real error handling
          console.log(error);
          return Observable.of<Hero[]>([]);
        });
      }

      gotoDetail(hero: Hero): void {
        this.show = false;
        let link = ['/heroes/heroeslist'];
        this.router.navigate(link);
      }
}
