import { Component } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  title = 'My Skills';

  constructor(public languageService: LanguageService) {
    
  }

}
