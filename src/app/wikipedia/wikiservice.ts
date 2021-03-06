import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search(term: string){
      let wikiUrl = 'http://en.wikipedia.org/w/api.php';
      let params = new URLSearchParams();
      params.set('search', term); //the user's search value
      params.set('action', 'opensearch');
      params.set('format', 'json');
      params.set('callback', 'JSONP_CALLBACK');
      return this.jsonp
              .get(wikiUrl, { search: params})
              .map(response => <string[]>response.json()[1])
              .catch(this.handleError);
  }
  private handleError(error: Response | any){
      //in a real app we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response){
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }

}
