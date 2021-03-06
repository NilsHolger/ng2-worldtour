import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesRoutingModule } from './heroes.routing.module';

//imports for loading and configuring in memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { AppHeroesComponent } from './heroes.app.component';
import { HeroesComponent } from './heroes.component';
import { HeroesDetailComponent } from './heroes.detail.component';
import { HeroesDashboardComponent } from './heroes.dashboard.component';
import { HeroSearchComponent } from './hero.search.component';
import { HeroService } from './hero.service';


@NgModule({
  imports: [ CommonModule, FormsModule, HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService), HeroesRoutingModule ],
  declarations: [ AppHeroesComponent, HeroesComponent, HeroesDetailComponent,
    HeroesDashboardComponent, HeroSearchComponent ],
  providers: [ HeroService ]
})
export class HeroesModule { }
