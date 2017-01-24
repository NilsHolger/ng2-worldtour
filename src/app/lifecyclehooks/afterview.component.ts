import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildViewComponent } from './childview.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-view',
  template: `
          <div>--- child view begins ---</div>
          <my-child-view></my-child-view>
          <div>--- child view ends ---</div>
          `
          + `<p *ngIf="comment" class="comment">
            {{comment}}
          </p>
  `,
  providers: [LoggerService]
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  private prevHero = '';
  //query for a viewchild of type childviewcomponent
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;
  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit() {
    //viewchild is set after view is initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    //viewchild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterView checked no change');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterView checked');
      this.doSomething();
    }
  }
  private logIt(method: string){
        let child = this.viewChild;
        let message = `${method}: ${child ? child.hero : 'no'} child view`;
        this.logger.log(message);
  }

  comment = '';
  //this surrogate for real business logic sets the comment
  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? 'That\'s a longggg name' : '';
    if ( c !== this.comment) {
      //wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = c);
    }
  }

}
