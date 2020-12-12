import { Injectable } from '@angular/core';
import { Appointment } from './shared/appointment.model';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MakeAppointmentService {

  public appointments:Appointment[]=[];

  appSubject= new Subject<Appointment[]>();

  constructor(private http: HttpClient) { }


  addAppointment(appointment: Appointment){
    this.appointments.push(appointment);
    this.appSubject.next(this.appointments.slice());
    return this.http.put("https://demoproject1-ad5c5.firebaseio.com/appointments.json", this.appointments.slice()).subscribe(response=>{
      console.log(response);
    })
      
    

  }


  getAppointment(){
    return this.http.get<Appointment[]>("https://demoproject1-ad5c5.firebaseio.com/appointments.json")
    .pipe(
      map(appointment=>{
        return appointment.map(
          app=>{
            return{
              ...app
            }
          }
        )
      })
    )
    .subscribe(appointment=>{
      this.appointments=appointment;
      this.appSubject.next(this.appointments.slice());
    })
  }

  getApp(){
    return this.appointments;
  }

  

}



