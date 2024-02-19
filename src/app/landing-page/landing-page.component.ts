import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  isActive: boolean = false;

  constructor(private router:Router) {
  }

  goToAbout() {
    this.isActive = !this.isActive
     setTimeout(() => {
      this.router.navigateByUrl('/intern/about');
     },1000)
  }

  goToGit(){
    window.open('https://github.com/SimonFunke/', '_blank');
  }

}
