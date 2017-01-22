import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HeroHttpRoutingModule } from './herohttp.routing.module';

import { HeroHttpHostComponent } from './herohttp.host.component';
import { HeroListComponent } from './herolist.component';
import { TechnologyListPromiseComponent } from './technologylist.component';
import { WikipediaComponent } from '../wikipedia/wiki.component';
import { WikipediaSmartComponent } from '../wikipedia/wiki.smart.component';

@NgModule({
  imports: [CommonModule, FormsModule, HeroHttpRoutingModule, HttpModule,
     JsonpModule],
  declarations: [ HeroHttpHostComponent, HeroListComponent,
                  TechnologyListPromiseComponent, WikipediaComponent, WikipediaSmartComponent ]
})
export class HeroHttpModule {}
