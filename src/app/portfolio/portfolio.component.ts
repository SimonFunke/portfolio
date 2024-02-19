import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Projects } from './../shared/interfaces/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  title = 'My Projects';
  projects: Projects[] = [];

  constructor() {
    this.projects.push(
      {
        name: 'El-Pollo-Loco',
        discription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        image: './../assets/img/el-pollo-loco.png',
        components: ['html', 'css', 'js'],
      }
    );

    this.projects.push(
      {
        name: 'Join',
        discription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
        image: './../assets/img/join.png',
        components: ['html', 'css', 'js'],
      }
    );

    this.projects.push(
      {
        name: 'El-Pollo-Loco',
        discription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        image: './../assets/img/el-pollo-loco.png',
        components: ['html', 'css', 'js'],
      }
    );
  }

}
