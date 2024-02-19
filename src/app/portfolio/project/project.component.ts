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

  @Input () project!: Projects;

}


