import { Component, Input, trigger, state, animate, style, transition } from '@angular/core';
import { Technology } from './animations.service';

@Component({
  selector: 'transition-enterleave',
  template: `
    <ul class="transitionsstyle">
    <li>
        <li *ngFor="let technology of technologies"
                [@flyInOut]="'in'">
                {{technology.name}}
        </li>
    </ul>
  `,
  styleUrls: ['./animations.transitions.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-500%)', color: '#ffffff'}),
        animate(10000)
      ]),
      transition('* => void', [
        animate(10000, style({transform: 'translateX(500%)', color: '#ffffff'}))
      ])
    ])
  ]
})
export class TransitionsEnterLeaveComponent {
  @Input() technologies: Technology;
}
