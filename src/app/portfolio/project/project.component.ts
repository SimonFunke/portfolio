import { Component, Input } from '@angular/core';
import { Projects } from '../../shared/interfaces/projects';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() project!: Projects;

  goToGit(project: string) {
    window.open('https://github.com/SimonFunke/' + project, '_blank');
  }

  goToTest(project: string) {
    let projectToLowerCase = project.toLocaleLowerCase();
    window.open('https://simon-funke.developerakademie.net/'+projectToLowerCase, '_blank');
  }

}

