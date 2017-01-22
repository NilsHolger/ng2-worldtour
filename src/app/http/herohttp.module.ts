import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HeroHttpRoutingModule } from './herohttp.routing.module';

import { HeroHttpHostComponent } from './herohttp.host.component';
import { HeroListComponent } from './herolist.component';

@NgModule({
  imports: [CommonModule, FormsModule, HeroHttpRoutingModule, HttpModule,
     JsonpModule],
  declarations: [ HeroHttpHostComponent, HeroListComponent ]
})
export class HeroHttpModule {}
