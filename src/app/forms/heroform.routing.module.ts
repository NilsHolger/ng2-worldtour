import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroFormHostComponent } from './heroformhost.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', redirectTo: 'forms', pathMatch: 'full'},
    {path: 'forms', component: HeroFormHostComponent}

  ])],
  exports: [RouterModule]
})
export class HeroFormRoutingModule {}
