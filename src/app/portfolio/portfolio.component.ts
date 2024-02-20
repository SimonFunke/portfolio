import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from '../shared/classes/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  title = 'My Projects';
  projects: Project[] = [];

  constructor() {
    this.projects.push( new Project('El-Pollo-Loco', 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.', './assets/img/el-pollo-loco.png', ['html', 'css', 'js']) );
    this.projects.push( new Project('Join', 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', './assets/img/join.png', ['html', 'css', 'js']) );
    this.projects.push( new Project('El-Pollo-Loco', 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.', './assets/img/el-pollo-loco.png', ['html', 'css', 'js']) );   
    this.projects.push( new Project('Join', 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', './assets/img/join.png', ['html', 'css', 'js']) );
  }

}
