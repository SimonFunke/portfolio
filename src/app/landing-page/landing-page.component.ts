import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  isActive: boolean = false;
  showImages: boolean = false;

  constructor(private router:Router) {
  }

  goToAbout(page : string = 'about') {
    this.isActive = !this.isActive
     setTimeout(() => {
      this.router.navigateByUrl('/intern/' + page);
     },1000)
  }

  goToGit(){
    window.open('https://github.com/SimonFunke/', '_blank');
  }

}
