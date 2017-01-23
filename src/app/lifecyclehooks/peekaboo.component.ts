import { AfterContentChecked, AfterContentInit, AfterViewChecked,
         AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges }
        from '@angular/core';
import { Component, Input } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

export class PeekABoo implements OnInit {
  constructor(private logger: LoggerService) {}
  //implement oninit's ngoninit method
  ngOnInit() { this.logIt(`OnInit`);}
  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see our enemy: {{name}}</p>',
  styles: ['p {background: #B00000; color: #ffffff; padding: 8px}']
})
//don't have to mention the lifecycle hook interfaces unless we want typing and tool support
export class PeekABooComponent extends PeekABoo implements OnChanges, OnInit, DoCheck,
                            AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
                            OnDestroy {
                @Input() name: string;
                private verb = 'initialized';
                constructor(logger: LoggerService) {
                  super(logger);
                  let is = this.name ? 'is' : 'is not';
                  this.logIt(`name ${is} known at construction`);
                }
                //only called for if there is @input variable set by parent
                ngOnChanges(changes: SimpleChanges) {
                  let changeMsgs : string[] = [];
                  for (let propName in changes){
                    if (propName === 'name'){
                      let name = changes['name'].currentValue;
                      changeMsgs.push(`name ${this.verb} to "${name}"`);
                    } else {
                      changeMsgs.push(propName + ' ' + this.verb);
                    }
                  }
                  this.logIt(`OnChanges: ${changeMsgs.join('; ')}`);
                  this.verb = 'changed'; //next time it will be changed
                }
                //beware!!! called frequently
                //called in every change detection cycle anywhere on the page
                ngDoCheck() { this.logIt(`DoCheck`); }

                ngAfterContentInit() { this.logIt(`AfterContentInit`); }

                //beware!!! called frequently
                //called in every change detection cycle anywhere on the page
                ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }

                ngAfterViewInit() { this.logIt(`AfterViewInit`); }

                //beware!! called frequently
                //called in every change detection cycle anywhere on the page
                ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }

                ngOnDestroy() { this.logIt(`OnDestroy: kill microsoft with joy, kindness && softly.`); }

}
