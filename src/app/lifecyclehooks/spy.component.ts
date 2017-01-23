import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'spy-parent',
  templateUrl: './spy.component.html',
  styles: [
    '.parent {background: #B80000; color: #ffffff; margin-bottom: 10px;}',
    '.candidates {background: #F00000; color: #ffffff}',
    '.redbtn {background: #C80000; color: #ffffff;}'
  ],
  providers: [LoggerService]
})
export class SpyParentComponent {
  newName = 'Willy';
  candidates: Array<string> = ['Billyboy', 'BillTheThief'];
  spyLog: string[];

  constructor(private logger: LoggerService) {
    this.spyLog = logger.logs;
  }

  addCandidate() {
    if (this.newName.trim()) {
      this.candidates.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  deleteCandidate(candidate: string){
    this.candidates.splice(this.candidates.indexOf(candidate), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('--- reset ---');
    this.candidates.length = 0;
    this.logger.tick();
  }

}
