import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeroesComponent } from './heroes.app.component';
import { HeroesComponent } from './heroes.component';
import { HeroesDashboardComponent } from './heroes.dashboard.component';
import { HeroesDetailComponent } from './heroes.detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', redirectTo:'heroes/dashboard', pathMatch: 'full'},
    {path: 'heroes', component: AppHeroesComponent,
    children: [
    {path: 'dashboard', component: HeroesDashboardComponent},
    {path:'detail/:id', component: HeroesDetailComponent},
    {path: 'heroeslist', component: HeroesComponent}

  ]
  }
  ])],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
