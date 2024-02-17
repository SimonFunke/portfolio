import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-intern',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './intern.component.html',
  styleUrl: './intern.component.scss'
})
export class InternComponent {

}
