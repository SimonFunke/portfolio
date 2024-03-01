import { Component } from '@angular/core';
//import i18next from 'i18next';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  title = 'About Me';

  constructor(public languageService: LanguageService) {
  }

}
