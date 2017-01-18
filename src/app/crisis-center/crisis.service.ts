import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string){}
}

const CRISIS = [
new Crisis(1, 'Linux, Androids, Chromebooks are not present in the desktop market'),
new Crisis(2, 'Worlwide enterprises are flooded with closed source software'),
new Crisis(3, 'The Open Source Code on Github is stolen and sold to companies'),
new Crisis(4, 'Closed source browsers are not implementing the specifications'),
new Crisis(5, 'Masses manipulated by mass media to fall into closed source trap'),
new Crisis(6, 'Closed source blocking installation and useage of Open Source Software'),
new Crisis(7, 'Open Source\'s reputation harmed, it is full of errors and no support')
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
