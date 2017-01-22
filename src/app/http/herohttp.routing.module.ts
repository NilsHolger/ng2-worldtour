import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroHttpHostComponent } from './herohttp.host.component';

@NgModule({
  imports: [RouterModule.forChild([
      {path: '', redirectTo: 'http', pathMatch: 'full'},
      {path: 'http', component: HeroHttpHostComponent}
  ])],
  exports: [RouterModule]
})
export class HeroHttpRoutingModule {}
