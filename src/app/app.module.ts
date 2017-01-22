import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroData} from './hero.data';
import { requestOptionsProvider } from './default.request.options.service';

import { AppRoutingModule } from './app.routing.module';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//feature modules
import { HeroesModule } from './heroes/heroes.module';
import { AnimationsModule } from './animations/animations.module';
import { HeroFormModule } from './forms/heroform.module';
import { HeroHttpModule } from './http/herohttp.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(HeroData),
    HeroesModule,
    AnimationsModule,
    HeroFormModule,
    HeroHttpModule,
    AppRoutingModule
  ],
  providers: [requestOptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
