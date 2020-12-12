import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/appointment.model';
import { MakeAppointmentService } from '../make-appointment.service';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html',
  styleUrls: ['./view-app.component.css']
})
export class ViewAppComponent implements OnInit {
   details:Appointment[];
  constructor(private appService: MakeAppointmentService,
            private http: HttpClient) { }

  ngOnInit(): void {
   this.appService.getAppointment();
   this.details= this.appService.getApp();
   this.appService.appSubject.subscribe((app:Appointment[])=>{
     this.details=app;
   })
  }



  
}
