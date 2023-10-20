import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  async sendMail() {
    // Werte aus Textfeldern auslesen (im Prinzip das gleiche wie document.getElementById)
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    // Eingabefelder deaktivieren, anschließend könnte man z.B. eine "Senden"-Animation triggern
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    // Daten zum senden vorbereiten
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    // an URL senden
    await fetch('https://bjoerndaigger.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });
    // Hier eventuell Nachricht gesendet Animation anzeigen und dann Eingabefelder wieder aktivieren
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}

