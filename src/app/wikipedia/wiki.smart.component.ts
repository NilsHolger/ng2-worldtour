import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { WikipediaService } from './wikiservice';


@Component({
    selector: 'my-wiki-smart',
    templateUrl: './wiki.component.html',
    providers: [ WikipediaService ]
})
export class WikipediaSmartComponent {
  title = 'Smarter Wikipedia Demo';
  fetches = 'Fetches when typing stops';
  items: Observable<string[]>;

  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term);}

  constructor(private wikipediaSearchService: WikipediaService) {
    this.items = this.searchTermStream
                     .debounceTime(300)
                     .distinctUntilChanged()
                     .switchMap((term: string) => this.wikipediaSearchService.search(term));
  }
}
