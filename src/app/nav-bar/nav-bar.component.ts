import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { SearchServiceService } from '../search-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchForm:FormGroup;
  constructor(private searchService: SearchServiceService,
              private router: Router,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.searchForm= new FormGroup({
      searchValue: new FormControl('')
    })
  }

  onSearch(){
    console.log(this.searchForm.controls['searchValue'].value);
    this.searchService.onSearch(this.searchForm.controls['searchValue'].value);
    this.router.navigate(['search-result'], {relativeTo:this.route});
  }

}
