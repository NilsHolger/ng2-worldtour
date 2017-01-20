import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimationsRoutingModule } from './animations.routing.module';


import { AppAnimationsComponent } from './animations.app.component';
import { TransitionsComponent } from './animations.transitions.component';
import { TransitionsHostComponent }from './animations.transitions-host.component';
import { TransitionsEnterLeaveComponent } from './animations.transitionsenterleave.component';
import { TransitionsEnterLeaveHostComponent }from './animations.transitionsenterleave-host.component';
import { TechnologiesService } from './animations.service';

@NgModule({
  imports: [CommonModule, FormsModule, AnimationsRoutingModule],
  declarations: [AppAnimationsComponent, TransitionsComponent, TransitionsHostComponent,
     TransitionsEnterLeaveComponent, TransitionsEnterLeaveHostComponent],
  providers: [TechnologiesService]
})
export class AnimationsModule {}
