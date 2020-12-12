import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   contactForm: FormGroup;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    let fname='';
    let lname='';
    let city='';
    let state='';
    let phone='';
    let email='';
    let age='';
    this.contactForm= new FormGroup({
      'fname': new FormControl(fname, Validators.required),
      'lname': new FormControl(lname, Validators.required),
      'city': new FormControl(city, Validators.required),
      'state': new FormControl(state, Validators.required),
      'phone': new FormControl(phone, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")]),
      'email': new FormControl(email, Validators.required),
      'age': new FormControl(age, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")]),


    })
  }

  submitContact(){
    this.contactService.addEnquiry(this.contactForm.value);
    alert("Enquiry Submitted");
    
  }

}
