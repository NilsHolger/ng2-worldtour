import { Component, OnInit } from '@angular/core';
import { Technology } from './hero';
import { TechnologyService } from './technology.service';

@Component({
  selector: 'technology-list-promise',
  templateUrl: './technologylist.component.html',
  styles: ['.error {color: red;}'],
  providers: [ TechnologyService ]
})
export class TechnologyListPromiseComponent implements OnInit {
  errorMessage: string;
  technologies: Technology[];
  mode = 'Promise';

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {this.getTechnologies();}

  getTechnologies() {
    this.technologyService.getTechnologies()
                          .then(technologies => this.technologies = technologies,
                            error => this.errorMessage = <any>Error);

  }
  addTechnology(name: string) {
    if (!name) { return;}
    this.technologyService.addTechnology(name)
                          .then(technology => this.technologies.push(technology),
                            error => this.errorMessage = <any>Error);
  }
}
