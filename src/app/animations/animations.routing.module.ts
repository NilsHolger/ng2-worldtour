import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAnimationsComponent } from './animations.app.component';
import { TransitionsHostComponent } from './animations.transitions-host.component';
import { TransitionsEnterLeaveHostComponent } from './animations.transitionsenterleave-host.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'animations/transitions', pathMatch: 'full'},
    { path: 'animations', component: AppAnimationsComponent,
    children: [
      {path: 'transitions', component: TransitionsHostComponent },
      {path: 'transitionsenterleave', component: TransitionsEnterLeaveHostComponent}
    ]
  }
])],
exports: [RouterModule]
})
export class AnimationsRoutingModule {

}
