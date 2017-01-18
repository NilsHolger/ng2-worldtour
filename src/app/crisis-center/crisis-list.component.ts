import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Crisis, CrisisService } from './crisis.service';
import 'rxjs/add/operator/switchMap';

@Component({
  template: `
  <div class="section no-pad-bot" id="index-banner">
   <div class="container">
      <!--<h1 class="header center red-text lighten-1">Promise Resolve Crises</h1>-->
    <div class="row" *ngFor="let crisis of crises | async"
    [class.selected]="isSelected(crisis)">
    <div class="col s12 m12">
    <div class="card horizontal">
    <a class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="assets/heartlesssavage2.jpg">
    </a>
    <div class="card-content">
      <span class="card-title activator red-text text-lighten-1">
            {{ crisis.name }}
          <i class="material-icons right">more_vert</i></span>
      <p><a href="https://google.com" target="_blank">Search and Destroy</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title red-text text-lighten-1">{{crisis.name}}<i class="material-icons right">close</i></span>
      <p>Here is some more information about this crisis that is only revealed upon search.</p>
    </div>
  </div>
</div>
</div>
<a (click)="goBack()" class="btn-floating btn-large waves-effect waves-light red lighten-1">
    <i class="material-icons">done</i></a>
    <!--<h3 class="center red-text lighten-1">welcome in crisis center</h3>-->
 </div>
</div>

      <!--<ul class="items">
          <li *ngFor="let crisis of crises | async" (click)="onSelect(crisis)">
          <span class="badge">{{crisis.id}}</span>{{crisis.name}}
          </li>
      </ul>-->
      <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;
  selectedId: number;
  constructor(private crisisService: CrisisService, private location: Location,
    private activatedRoute: ActivatedRoute, private router: Router){}
    isSelected(crisis: Crisis){
      return crisis.id === this.selectedId;
    }
  ngOnInit(){
    this.crises = this.activatedRoute.params.switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.crisisService.getCrises();
    });
  }
  onSelect(crisis: Crisis){
    this.selectedId = crisis.id;
    //navigate with relative link
    this.router.navigate([crisis.id], {relativeTo: this.activatedRoute});
  }

  goBack(): void {
      this.location.back();
    }
}
