import { InMemoryDbService } from 'angular-in-memory-web-api';
export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Wonderwoman'},
      { id: 2, name: 'Mr. Nice'},
      { id: 3, name: 'Flash'},
      { id: 4, name: 'Magneta'},
      { id: 5, name: 'Rubberman'},
      { id: 6, name: 'Dynama'}
    ];
    return { heroes };
  }
}

export class TechnologyData implements InMemoryDbService {
  createDb() {
    let technologies = [
      { id: 1, name: 'Angular 1'},
      { id: 2, name: 'Angular 2'},
      { id: 3, name: 'Angular CLI'},
      { id: 4, name: 'Material Design'},
      { id: 5, name: 'Ionic'},
      { id: 6, name: 'Firebase'},
      { id: 7, name: 'Google Cloud'}
    ];
    return { technologies };
  }
}
