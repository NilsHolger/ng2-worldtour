import { Component } from '@angular/core';

@Component({
  selector: 'my-heroes-app',
  template: `
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
    <hero-search class="left"></hero-search>
 <h1 class="header center red-text lighten-1">{{title}}</h1>
<div class="row center">
<nav>
 <a class="waves-effect waves-light btn" routerLink="/heroes/heroeslist" routerLinkActive="active">Heroes</a>
 <a class="waves-effect waves-light btn" routerLink="/heroes/dashboard" routerLinkActive="active">Dashboard</a>
</nav>

</div>
    <router-outlet></router-outlet>
    </div>
    </div>
  `
})
export class AppHeroesComponent {
      title = 'Tour of Heroes';
}
