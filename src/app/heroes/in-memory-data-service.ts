import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {

      createDb() {
        let heroes = [
        {id: 9, name: 'You'},
        {id: 10, name: 'Wonderwoman'},
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Flash'},
        {id: 13, name: 'Blitzkrieg'},
        {id: 14, name: 'Narco'},
        {id: 15, name: 'Bombasto'},
        {id: 16, name: 'Magneta'},
        {id: 17, name: 'Warlord'},
        {id: 18, name: 'Dynama'},
        {id: 19, name: 'Dr. IQ'},
        {id: 20, name: 'Magma'}
        ];
        return { heroes };
      }
}
