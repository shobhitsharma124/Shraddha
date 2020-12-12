import { Injectable } from '@angular/core';
import {Contact} from '../app/shared/contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private enquiry: Contact[]=[];

  constructor( private http: HttpClient) { 

  }

  addEnquiry(contact:Contact){
    this.enquiry.push(contact);

    return this.http.put("https://demoproject1-ad5c5.firebaseio.com/contacts.json", this.enquiry.slice()).subscribe(response=>{
        console.log(response);
      });
  }

  getEnquiry(){
    return this.enquiry;
  }
}
