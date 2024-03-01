import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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
  sendMessageBox: boolean = false;
  sendMessage: boolean = false;
  checkboxImage: string = './assets/icons/check_box.svg';
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest: boolean = false;

  post = {
    endPoint: 'https://simon-funke.developerakademie.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      }
    }
  };

  http = inject(HttpClient);


  constructor(private router: Router) { }

  changeCheckboxImage() {
    this.checked = !this.checked;
    if (this.checked) {
      this.checkboxImage = './assets/icons/check_box_checked.svg';
    } else {
      this.checkboxImage = './assets/icons/check_box.svg';
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && this.checked && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.changeCheckboxImage();
            this.sendMessage = true;
            this.sendMessageBox = true;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      setTimeout(() => {
        this.sendMessage = false;
      }, 2000);
    }
    else if (ngForm.valid && ngForm.submitted && this.checked && this.mailTest) {
      ngForm.resetForm();
      this.changeCheckboxImage();
      this.sendMessage = true;
      this.sendMessageBox = true;
    }
  }

  openPrivacy() {
    this.router.navigate(['privacy']);
  }
}
