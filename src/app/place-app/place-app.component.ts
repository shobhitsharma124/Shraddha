import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { MakeAppointmentService } from '../make-appointment.service';

@Component({
  selector: 'app-place-app',
  templateUrl: './place-app.component.html',
  styleUrls: ['./place-app.component.css']
})
export class PlaceAppComponent implements OnInit {
  appointmentForm: FormGroup ;
  constructor(private appService: MakeAppointmentService,
              private fb: FormBuilder) {
    let fname='';
    let lname='';
    let city='';
    let phone='';
    let email='';
    let age='';
    let pincode='';
    let pck='Rs-500';
    let trainer='Male';
    let pt='PT not Required';
    this.appointmentForm=  fb.group({
      fname:new FormControl(fname, Validators.required),
      lname:new FormControl(lname, Validators.required),
      city:new FormControl(city, Validators.required),
      phone:new FormControl(phone, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email:new FormControl(email, Validators.required),
      age:new FormControl(age, [Validators.required, Validators.pattern("^(?:1[8-9]|[2-5][0-9]|60)$")]),
      pincode: new FormControl(pincode, [Validators.required, Validators.pattern("^[0-9]{6}$")]),
      package:new FormControl(pck),
      trainer: new FormControl(trainer),
      pt: new FormControl(pt),
      
  });
   }

  ngOnInit(): void {
    //  this.initForm();
    
  }
  get f(){
    return this.appointmentForm.controls;
  }



  // private initForm(){
  //   let fname='';
  //   let lname='';
  //   let city='';
  //   let phone='';
  //   let email='';
  //   let age='';
  //   let pincode='';
  //   let pck='One time';
  //   let trainer='Male';
  //   let pt='PT not Required';

  //   this.appointmentForm= new FormGroup({
  //       'fname':new FormControl(fname, Validators.required),
  //       'lname':new FormControl(lname, Validators.required),
  //       'city':new FormControl(city, Validators.required),
  //       'phone':new FormControl(phone, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  //       'email':new FormControl(email, Validators.required),
  //       'age':new FormControl(age, Validators.required),
  //       'pincode': new FormControl(pincode, [Validators.required, Validators.pattern("^[0-9]{6}$")]),
  //       'package':new FormControl(pck),
  //       'trainer': new FormControl(trainer),
  //       'pt': new FormControl(pt)
  //   });


 





submitApp(){
  this.appService.addAppointment(this.appointmentForm.value);
  this.appointmentForm.reset();
  alert("Appointment Request Submitted");
}
}
