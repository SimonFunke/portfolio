import { Component, Input } from '@angular/core';
import { Project } from './../../shared/classes/project';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() project!: Project;

  goToGit(project: string) {
    window.open('https://github.com/SimonFunke/' + project, '_blank');
  }

  goToTest(project: string) {
    let projectToLowerCase = project.toLocaleLowerCase();
    window.open('https://simon-funke.developerakademie.net/'+projectToLowerCase, '_blank');
  }

  getImageSrc(component:string){
    return `./assets/icons/${component}.png`;
  }

}