import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  title = 'Contact Me';
  checked: boolean = false;
  checkboxImage: string = './../../assets/icons/check_box.svg';

  changeCheckboxImage() {
    this.checked = !this.checked;
    if (this.checked) {
      this.checkboxImage = './../../assets/icons/check_box_checked.svg';
    } else {
      this.checkboxImage = './../../assets/icons/check_box.svg';
    }
    
  }


}
