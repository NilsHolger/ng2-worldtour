import { Component } from '@angular/core';

@Component({
  selector: 'ng-animations',
  template: `
  <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <h1 class="header center red-text lighten-1">{{title}}</h1>
        <div class="row-center">
                <nav>
                  <a class="waves-effect waves-light btn"
                  routerLink="/animations/transitions" routerLinkActive="active">Transitions</a>
                  <a class="waves-effect waves-light btn" routerLink="/animations/transitionsenterleave" routerLinkActive="active">TransitionsEnterLeave</a>
                  <!--<a class="waves-effect waves-light btn" routerLink="/animations/transitionsenterleave" routerLinkActive="active">TransitionsEnterLeave</a>
                  <a class="waves-effect waves-light btn" routerLink="/animations/transitionsenterleavestate" routerLinkActive="active">TransitionsEnterLeaveState</a>
                  <a class="waves-effect waves-light btn" routerLink="/animations/transitionsauto" routerLinkActive="active">TransitionsAuto</a>
                  <a class="waves-effect waves-light btn" routerLink="/animations/transitionsgroups" routerLinkActive="active">TransitionsGroups</a>
                  <a class="waves-effect waves-light btn" routerLink="/animations/transitionstimings" routerLinkActive="active">TransitionsTimings</a>
                  <a class="waves-effect waves-light btn" routerLink="/animations/transitionsmultistep" routerLinkActive="active">TransitionsMultiStep</a>-->
                </nav>
                <router-outlet></router-outlet>
        </div>
      </div>
  </div>
  `
})
export class AppAnimationsComponent {
    title = 'Angular Animations';
}
