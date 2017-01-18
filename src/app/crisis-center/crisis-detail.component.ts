import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { slideInDownAnimations } from '../app.animations';
import { Crisis } from './crisis.service';
import { DialogService } from '../app.dialog.service';


@Component({
  template: `
  <div *ngIf="crisis">
      <h3>{{editName}}</h3>
      <div>
        <label>Id: </label> {{crisis.id}}
      </div>
      <div>
      <label>name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
      </div>
      <p>
        <button (click)="save()">Save</button>
        <button (click)="cancel()">Cancel</button>
      </p>
  </div>
  `,
  styles: ['input {width: 20em}'],
  animations: [ slideInDownAnimations]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') positions = 'absolute';

  crisis: Crisis;
  editName: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              public dialogService: DialogService){}
  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { crisis: Crisis}) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }
  cancel() {
    this.gotoCrises();
  }
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
  canDeactivate(): Promise<boolean> | boolean {
      if(!this.crisis || this.crisis.name === this.editName){
        return true;
      }
      return this.dialogService.confirm('discard changes?');
  }
  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.activatedRoute});
  }

}
