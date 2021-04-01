import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map, tap } from 'rxjs/operators';
import { FetchDataService } from 'src/app/services/fetch-data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private service : FetchDataService) { }

  search = (text$: Observable<string>) => {
    return text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        // switchMap allows returning an observable rather than maps array
        switchMap( (searchText) =>  this.service.getAutocompleteData(searchText) )
    );
  }
  
  inputFormatBandListValue(value: any)   {
    if(value.name)
      return value.name
    return value;
  }


  ngOnInit(): void {

  }

}
