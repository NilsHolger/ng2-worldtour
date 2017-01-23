import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LifecycleHooksHostComponent } from './lifecyclehookshost.component';


@NgModule({
    imports: [RouterModule.forChild([
      {path: '', redirectTo: 'lifecyclehooks', pathMatch: 'full'},
      {path: 'lifecyclehooks', component: LifecycleHooksHostComponent }
    ])],
    exports: [RouterModule]
})
export class LifecycleHooksRoutingModule { }
