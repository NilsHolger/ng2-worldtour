import { InMemoryDbService } from 'angular-in-memory-web-api';
export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Wonderwoman'},
      { id: 2, name: 'Mr. Knife'},
      { id: 3, name: 'Flash'},
      { id: 4, name: 'Cutthroat'},
      { id: 5, name: 'Warlord'},
      { id: 6, name: 'Blitzkrieg'}
    ];
    return { heroes };
  }
}
