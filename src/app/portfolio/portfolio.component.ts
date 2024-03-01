import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { Project } from '../shared/classes/project';
import { LanguageService } from '../shared/services/language.service';

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

  constructor(public languageService: LanguageService) {
    this.projects.push( new Project('El-Pollo-Loco', 'elPolloLoco' ,'./assets/img/el-pollo-loco.png', ['html', 'css', 'js']) );
    this.projects.push( new Project('Join', 'join' ,'./assets/img/join.png', ['html', 'css', 'js']) );
  }

}