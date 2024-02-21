import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  title = 'Contact Me';
  checked: boolean = false;
  checkboxImage: string = './assets/icons/check_box.svg';
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private router:Router) { }

  changeCheckboxImage() {
    this.checked = !this.checked;
    if (this.checked) {
      this.checkboxImage = './assets/icons/check_box_checked.svg';
    } else {
      this.checkboxImage = './assets/icons/check_box.svg';
    }   
  }

  onSubmit(ngForm: NgForm){
    if(ngForm.valid && ngForm.submitted){
      console.log(this.contactData);
    }    
  }

  openPrivacy(){
    this.router.navigate(['privacy']);
  }

}
