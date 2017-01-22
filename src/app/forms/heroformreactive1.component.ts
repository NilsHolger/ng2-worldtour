import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from './hero';
import { forbiddenNameValidator } from './forbidden.name.directive';

@Component({
  selector: 'hero-form-reactive1',
  templateUrl: './heroformreactive1.component.html'
})
export class HeroFormReactive1Component implements OnInit {
title = 'Hero Form 1(reactive)';

powers = ['Really Smart', 'Super Flexible', 'Top Killer'];
hero = new Hero(18, 'Dr. WhatIsHisName', this.powers[2], 'Dr. What');
submitted = false;
onSubmit(){
  this.submitted = true;
  this.hero = this.heroForm.value;
}
//reset the form with a new hero and restore pristine class state
//by toggling active falg whic causes the form
//to be removed readded in a tick via ngif
//TODO: workaround until ngform has a reset method(#6822)
active = true;
addHero() {
  this.hero = new Hero(42, '', '');
  this.buildForm();
  this.active = false;
  setTimeout(() => this.active = true, 0);
}

heroForm: FormGroup;
constructor(private fb: FormBuilder) { }

ngOnInit(): void {
  this.buildForm();
}

buildForm(): void {
      this.heroForm = this.fb.group({
        'name': [this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          forbiddenNameValidator(/killbillyboy/i)
        ]
      ],
      'alterEgo' : [this.hero.alterEgo],
      'power' : [this.hero.power, Validators.required]
    }),
    this.heroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); //reset validation messages now
}

  onValueChanged(data?: any) {
          if (!this.heroForm) { return; }
          const form = this.heroForm;

          for(const field in this.formErrors){
              //clear previous error message if any
              this.formErrors[field] = '';
              const control = form.get(field);
              if (control && control.dirty && !control.valid){
                  const messages = this.validationMessages[field];
                  for (const key in control.errors){
                        this.formErrors[field] += messages[key] + ' ';
                  }
              }
          }
      }
    formErrors = {
      'name': '',
      'power': ''
    };

    validationMessages = {
            'name': {
              'required': 'Name is required.',
              'minlength': 'Name must be at least 4 characters long.',
              'maxlength': 'Name cannot be more than 24 caracters long.',
              'forbiddenName': 'Someone named "BillyBoy" cannot be a hero.'
            },
            'power': {
              'required': 'Power is required.'
            }
    };


}
