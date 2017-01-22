import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { WikipediaService } from './wikiservice';

@Component({
  selector: 'my-wiki',
  templateUrl: './wiki.component.html',
  providers: [ WikipediaService ]
})
export class WikipediaComponent {
  title = 'Wikipedia Demo';
  fetches = 'Fetches after every keystroke';
  items: Observable<string[]>;
  constructor(private wikipediaSearchService: WikipediaService) { }
  search(term: string){
    this.items = this.wikipediaSearchService.search(term);
  }




}
