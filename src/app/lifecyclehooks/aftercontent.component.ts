import { AfterContentChecked, AfterContentInit, ContentChild, Component } from '@angular/core';
import { ChildViewComponent } from './childview.component';
import { LoggerService } from './logger.service';


@Component({
  selector: 'after-content',
  template: `
        <div>--- projected content begins ---</div>
              <ng-content></ng-content>
        <div>--- projected content ends ---</div>`
        +
        `
        <p *ngIf="comment" class="comment">
        {{comment}}
        </p>
        `,
        providers: [LoggerService]
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
      private prevHero = '';
      comment = '';

      //query for contentchild of type childviewcomponent
      @ContentChild(ChildViewComponent) contentChild: ChildViewComponent;

      constructor(private logger: LoggerService) {
        this.logIt('AfterContent constructor');
      }

      ngAfterContentInit() {
        //contentchild is set after content has been initialized
        this.logIt('AfterContentInit');
        this.doSomething();
      }

      ngAfterContentChecked() {
        //contentchild is updated after content has been checked
        if (this.prevHero === this.contentChild.hero){
          this.logIt('AfterContentChecked (no change)');
        } else {
           this.prevHero = this.contentChild.hero;
           this.logIt('AfterContentChecked');
           this.doSomething();
        }
      }
      //this surrogate for real business logic sets the comment
      private doSomething() {
        this.comment = this.contentChild.hero.length > 10 ? `That's a longggggg name` : '';
      }
      private logIt(method: string){
        let child = this.contentChild;
        let message = `${method}; ${child ? child.hero : 'no'} child content`;
        this.logger.log(message);
      }


}
