import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeroesComponent } from './heroes.app.component';
import { HeroesComponent } from './heroes.component';
import { HeroesDashboardComponent } from './heroes.dashboard.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', redirectTo:'heroes/dashboard', pathMatch: 'full'},
    {path: 'heroes', component: AppHeroesComponent,
    children: [
    {path: 'heroeslist', component: HeroesComponent},
    {path: 'dashboard', component: HeroesDashboardComponent}
  ]
  }
  ])],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
