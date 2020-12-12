import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceAppComponent } from './place-app/place-app.component';
import { ViewAppComponent } from './view-app/view-app.component';
import { ContactComponent } from './contact/contact.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const appRoutes: Routes=[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'make-an-appointment', component: PlaceAppComponent},
  {path:'view-appointment', component:ViewAppComponent},
  {path:'contact', component:ContactComponent},
  {path:'search-result', component:SearchResultsComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

 }
