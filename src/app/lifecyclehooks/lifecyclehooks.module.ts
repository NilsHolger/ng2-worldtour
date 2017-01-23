import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifecycleHooksRoutingModule } from './lifecyclehooks.routing.module';
import { LifecycleHooksHostComponent } from './lifecyclehookshost.component';

import { PeekABooParentComponent } from './peekaboo.parent.component';
import { PeekABooComponent } from './peekaboo.component';


@NgModule({
  imports: [CommonModule, FormsModule, LifecycleHooksRoutingModule],
  declarations: [LifecycleHooksHostComponent, PeekABooParentComponent, PeekABooComponent]
})
export class LifecycleHooksModule {}
