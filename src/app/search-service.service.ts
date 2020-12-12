import { Injectable } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
private query:string;
  constructor() { }

  onSearch(query:string){
      this.query=query;
  }

  getSearchResult(){

    return this.query;
  }
}
