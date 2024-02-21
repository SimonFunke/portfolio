import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  isActive: boolean = false;

  constructor(private router:Router) {
    
  }

  @Input() showImages: boolean = true;

  goToGit(){
    window.open('https://github.com/SimonFunke/', '_blank');
  }

  goToImpress(){
    this.router.navigate(['impress']);
  }

}
