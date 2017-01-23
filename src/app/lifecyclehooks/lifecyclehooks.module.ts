import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifecycleHooksRoutingModule } from './lifecyclehooks.routing.module';
import { LifecycleHooksHostComponent } from './lifecyclehookshost.component';

import { PeekABooParentComponent } from './peekaboo.parent.component';
import { PeekABooComponent } from './peekaboo.component';

import { SpyParentComponent } from './spy.component';
import { SpyDirective } from './spy.directive';


@NgModule({
  imports: [CommonModule, FormsModule, LifecycleHooksRoutingModule],
  declarations: [LifecycleHooksHostComponent, PeekABooParentComponent,
    PeekABooComponent, SpyParentComponent, SpyDirective]
})
export class LifecycleHooksModule {}
