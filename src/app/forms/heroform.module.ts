import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroFormRoutingModule } from './heroform.routing.module';

import { HeroFormHostComponent } from './heroformhost.component';
import { HeroFormTemplate1Component } from './heroformtemplate1.component';

@NgModule({
  imports: [ CommonModule, FormsModule, HeroFormRoutingModule],
  declarations: [ HeroFormHostComponent, HeroFormTemplate1Component ]
})
export class HeroFormModule {}
