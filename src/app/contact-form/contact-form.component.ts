import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm:any;
  sendMail() {
    // action="https://bjoerndaigger.de/send_mail/send_mail.php"
    console.log('Sending mail', this.myForm);
  }
}

 