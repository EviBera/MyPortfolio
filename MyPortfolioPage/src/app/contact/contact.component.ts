import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'mpp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup;
  isSending = false;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      from_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]]
    });

  }

  async send(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    this.isSending = true;

    emailjs.init('VHI-vVdX1-72cIw2p');

    try {
      let response = await emailjs.send("service_xdmy7zr","template_opq3tnj",{
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        message: this.form.value.message,
      });
      
      alert('Your message has been sent.');
      
      this.form.reset();

    } catch (error) {
      alert('Failed to send the message. Please try again.');
    } finally {
      this.isSending = false;
    }    
  }
}
