import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaceAppComponent } from './place-app/place-app.component';
import { ViewAppComponent } from './view-app/view-app.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceAppComponent,
    ViewAppComponent,
    ContactComponent,
    NavBarComponent,
    SideBarComponent,
    SearchResultsComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
