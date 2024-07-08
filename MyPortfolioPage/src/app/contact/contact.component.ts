import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'mpp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.formBuilder.group({
    from_name: '',
    from_email: '',
    message: ''
  });

  constructor(private formBuilder: FormBuilder){

  }

  async send(){
    emailjs.init('VHI-vVdX1-72cIw2p');
    let response = await emailjs.send("service_xdmy7zr","template_opq3tnj",{
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    alert('Your message has been sent.');

    this.form.reset();
  }
}

/*
Code for using EmailJS:
  emailjs.send("service_xdmy7zr","template_opq3tnj",{
    from_name: "Test User",
    from_email: "testuser@email.com",
    message: "Nice.",
  });
*/