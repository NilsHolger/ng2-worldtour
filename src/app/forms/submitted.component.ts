import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-submitted',
  template: `
    <div *ngIf="submitted">
    <ul class="collection with-header">
    <li class="collection-header"><h4>You submitted the following</h4></li>
<li class="collection-item avatar">
<i class="material-icons circle blue circle">g_translate</i>
<span class="title">Name</span>
<p>{{hero.name}}
</p>
<a href="https://angular.io" target="_blank" class="secondary-content"><i class="material-icons">grade</i></a>
</li>
<li class="collection-item avatar">
<i class="material-icons circle green">insert_chart</i>
<span class="title">Alter Ego</span>
<p>{{hero.alterEgo}}
</p>
<a href="https://angular.io" target="_blank" class="secondary-content"><i class="material-icons">grade</i></a>
</li>
<li class="collection-item avatar">
<i class="material-icons circle red">play_arrow</i>
<span class="title">Power</span>
<p>{{hero.power}}
</p>
<a href="https://angular.io" target="_blank" class="secondary-content"><i class="material-icons">grade</i></a>
</li>
<li class="collection-item"><button (click)="onClick()" class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>Edit</button>
</li>
</ul>
    </div>
  `
})
export class SubmittedComponent {
  @Input() hero: Hero;
  @Input() submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false);}
}
