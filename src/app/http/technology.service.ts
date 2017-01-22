//promise version
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Technology } from './hero';

@Injectable()
export class TechnologyService {
        //URL to JSON file
        private technologiesURL = 'app/heroes';

        constructor(private http: Http) { }

        getTechnologies(): Promise<Technology[]> {
          return this.http.get(this.technologiesURL)
                           .toPromise()
                           .then(this.extractData)
                           .catch(this.handleError);
        }

        addTechnology(name: string): Promise<Technology> {
          let headers = new Headers({ 'Content-Type': 'application/json'});
          let options = new RequestOptions({ headers: headers});
          return this.http.post(this.technologiesURL, { name }, options)
                          .toPromise()
                          .then(this.extractData)
                          .catch(this.handleError);
        }

        private extractData(res: Response){
          let body = res.json();
          return body.data || { };
        }

        private handleError(error: Response | any) {
          //in a real world app we might use a remote logging infrastructure
          let errMsg: string;
          if (error instanceof Response){
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
          } else {
            errMsg = error.message ? error.message : error.toString();
          }
          console.error(errMsg);
          return Promise.reject(errMsg);
        }
}
