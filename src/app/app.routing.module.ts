import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CanDeactivateGuard } from './can-deactivate-guard';



const routes: Routes = [
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path:'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
    },
    {path: 'heroes', component: HeroesComponent},
    {path: '**', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ CanDeactivateGuard ]
})
export class AppRoutingModule {}
