import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  sendMail() {
    // action="https://bjoerndaigger.de/send_mail/send_mail.php"
    const nameValue = this.nameField.nativeElement.value;
    const messageValue = this.messageField.nativeElement.value;
  
    console.log('Sending mail', nameValue, messageValue);
  }
}

 