import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  mobileMenu: boolean = false;
  burgerIconSrc: string = './assets/icons/burger.png';
  constructor(private languageService: LanguageService) { }

  toggleMenu(){
    this.mobileMenu = !this.mobileMenu;
    if(this.mobileMenu){
      this.burgerIconSrc = './assets/icons/burger_x.png';
    }else{
      this.burgerIconSrc = './assets/icons/burger.png';
    }
  }

  closeMenu(){
    this.mobileMenu = false;
    this.burgerIconSrc = './assets/icons/burger.png';
  }

  changeLanguage(lang: string){
    this.languageService.changeLanguage(lang);
  }

}
