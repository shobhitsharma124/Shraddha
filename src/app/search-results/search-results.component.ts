import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { Appointment } from '../shared/appointment.model';
import { MakeAppointmentService } from '../make-appointment.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private searchService: SearchServiceService,
              private appointmentSevice: MakeAppointmentService) { }
  searchQuery:string;
  appointments: Appointment[];
  ngOnInit(): void {
      this.searchQuery=this.searchService.getSearchResult();
       this.appointmentSevice.getAppointment();
       this.appointments= this.appointmentSevice.getApp();
       this.appointmentSevice.appSubject.subscribe((appointment:Appointment[])=>{
            this.appointments=appointment;
       })
  }
}
