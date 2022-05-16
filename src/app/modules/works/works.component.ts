import { Component } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';
import { Router } from '@angular/router';
import { TruncatePipe } from '../shared/trunc.pipe';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  pipes: [TruncatePipe],
})
export class WorksComponent implements OnInit {
  rojects: Project[];

  constructor(public _projectService: ProjectService, public router: Router) {}

  chooseProject(project) {
    this.router.navigate(['detail', project.id]);
  }

  ngOnInit() {
    this._projectService.getProjects().then((projects) => (this.projects = projects));
  }
}
