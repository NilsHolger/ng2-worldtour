import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string){}
}

const CRISIS = [
new Crisis(1, 'Linux, Androids, Chromebooks are not present in the desktop market.'),
new Crisis(2, '9% cloud market share war, azure is in second place worldwide.'),
new Crisis(3, 'Worlwide enterprises are flooded with closed source software.'),
new Crisis(4, 'The Open Source Code on Github is stolen and sold to companies.'),
new Crisis(5, 'Closed source browsers are not implementing the specifications.'),
new Crisis(6, 'Masses manipulated by mass media to fall into closed source trap.'),
new Crisis(7, 'Closed source blocking installation and usage of Open Source Software.'),
new Crisis(8, 'Open Source\'s reputation harmed, it is full of errors and no support.')
];

let crisesPromise = Promise.resolve(CRISIS);

@Injectable()
export class CrisisService {
  static nextCrisisId = 10;
  getCrises() { return crisesPromise; }

  getCrisisById(id: number | string){
    return crisesPromise.then(crises => crises.find(crisis => crisis.id === +id));
  }

  addCrisis(name: string){
    name = name.trim();
    if (name){
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisesPromise.then(crises => crises.push(crisis));
    }
  }
}
