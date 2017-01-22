import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroFormRoutingModule } from './heroform.routing.module';

import { HeroFormHostComponent } from './heroformhost.component';
import { HeroFormTemplate1Component } from './heroformtemplate1.component';
import { HeroFormReactive1Component } from './heroformreactive1.component';
import { ForbiddenValidatorDirective } from './forbidden.name.directive';
import { SubmittedComponent } from './submitted.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, HeroFormRoutingModule],
  declarations: [ HeroFormHostComponent, HeroFormTemplate1Component,
                  HeroFormReactive1Component, ForbiddenValidatorDirective,
                  SubmittedComponent]
})
export class HeroFormModule {}
