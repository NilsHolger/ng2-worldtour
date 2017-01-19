import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Technology } from './animations.service';

@Component({
  selector: 'transition-list-basic',
  template: `
    <ul class="transitionstyle">
        <li *ngFor="let technology of technologies"
            [@technologyState]="technology.state" (click)="technology.toggleState()">
            {{technology.name}}
        </li>
    </ul>
  `,
  styleUrls: ['./animations.transitions.component.css'],
  animations: [
    trigger('technologyState', [
      state('inactive', style({
        backgroundColor: '#ee6e73',
        color: '#ffffff',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#f44242',
        color: '#ffffff',
        transform: 'scale(10)'
      })),
      transition('inactive => active', animate('1500ms ease-in')),
      transition('active => inactive', animate('1500ms ease-out'))
    ])
  ]
})
export class TransitionsComponent {
  @Input() technologies: Technology ;
}
