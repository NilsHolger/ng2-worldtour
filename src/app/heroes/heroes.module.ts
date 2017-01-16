import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppHeroesComponent } from './heroes.app.component';
import { HeroesComponent } from './heroes.component';
import { HeroesDetailComponent } from './heroes.detail.component';
import { HeroesDashboardComponent } from './heroes.dashboard.component';
import { HeroService } from './hero.service';
import { HeroesRoutingModule } from './heroes.routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, HeroesRoutingModule ],
  declarations: [ AppHeroesComponent, HeroesComponent, HeroesDetailComponent,
    HeroesDashboardComponent ],
  providers: [ HeroService ]
})
export class HeroesModule { }
