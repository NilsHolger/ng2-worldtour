import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifecycleHooksRoutingModule } from './lifecyclehooks.routing.module';
import { LifecycleHooksHostComponent } from './lifecyclehookshost.component';

//import { LoggerService } from './logger.service';

import { PeekABooParentComponent } from './peekaboo.parent.component';
import { PeekABooComponent } from './peekaboo.component';
import { SpyParentComponent } from './spy.component';
import { SpyDirective } from './spy.directive';
import { OnChangesParentComponent } from './onchanges.parent.component';
import { OnChangesComponent } from './onchanges.component';
import { DoCheckParentComponent } from './docheck.parent.component';
import { DoCheckComponent } from './docheck.component';
import { ChildViewComponent } from './childview.component';
import { AfterViewComponent } from './afterview.component';
import { AfterViewParentComponent } from './afterview.parent.component';
import { AfterContentParentComponent } from './aftercontent.parent.component';
import { AfterContentComponent } from './aftercontent.component';
import { CounterParentComponent } from './counter.parent.component';
import { CounterComponent } from './counter.component';


@NgModule({
  imports: [CommonModule, FormsModule, LifecycleHooksRoutingModule],
  declarations: [LifecycleHooksHostComponent, PeekABooParentComponent,
    PeekABooComponent, SpyParentComponent, SpyDirective, OnChangesParentComponent,
    OnChangesComponent, DoCheckParentComponent, DoCheckComponent, AfterViewParentComponent,
    AfterViewComponent, ChildViewComponent, AfterContentParentComponent,
    AfterContentComponent, CounterParentComponent, CounterComponent]
})
export class LifecycleHooksModule {}
