import { InMemoryDbService } from 'angular-in-memory-web-api';
export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'You'},
      { id: 2, name: 'Wonderwoman'},
      { id: 3, name: 'Mr. Nice'},
      { id: 4, name: 'Flash'},
      { id: 5, name: 'Blitzkrieg'},
      { id: 5, name: 'Warlord'},

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
