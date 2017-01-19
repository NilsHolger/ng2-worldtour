import { Injectable } from '@angular/core';

export class Technology {
  constructor(public name: string, public state = 'inactive') {}
  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}

let ALL_TECHNOLOGIES = [
      'Angular 1',
      'Angular 2',
      'Angular CLI',
      'Material Design',
      'NodeJS',
      'V8',
      'ChromeOS',
      'Android',
      'Linux',
      'Firebase',
      'Google Cloud'
].map(name => new Technology(name));

@Injectable()
export class TechnologiesService implements Iterable<Technology> {

  currentTechnologies: Technology[] = [];

  [Symbol.iterator]() {
    return this.currentTechnologies.values();
  }

  canAdd() {
    return this.currentTechnologies.length < ALL_TECHNOLOGIES.length;
  }

  canRemove() {
    return this.currentTechnologies.length > 0;
  }

  addActive() {
    let technology = ALL_TECHNOLOGIES[this.currentTechnologies.length];
    technology.state = 'active';
    this.currentTechnologies.push(technology);
  }

  addInactive() {
    let technology = ALL_TECHNOLOGIES[this.currentTechnologies.length];
    technology.state = 'inactive';
    this.currentTechnologies.push(technology);
  }

  remove() {
    this.currentTechnologies.splice(this.currentTechnologies.length - 1, 1);
  }








}
