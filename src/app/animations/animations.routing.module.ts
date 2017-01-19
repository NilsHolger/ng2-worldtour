import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAnimationsComponent } from './animations.app.component';
import { TransitionsComponent } from './animations.transitions.component';
import { TransitionsHostComponent } from './animations.transitions-host.component';
import { TransitionsTwoWayComponent } from './animations.transitionstwoway.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'animations/transitions', pathMatch: 'full'},
    { path: 'animations', component: AppAnimationsComponent,
    children: [
      {path: 'transitions', component: TransitionsHostComponent },
      {path: 'transitionstwoway', component: TransitionsTwoWayComponent}
    ]
  }
])],
exports: [RouterModule]
})
export class AnimationsRoutingModule {

}
