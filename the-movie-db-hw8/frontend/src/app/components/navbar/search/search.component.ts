import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service : FetchDataService, private _router : Router) { }

  search = (text$: Observable<string>) => {
    return text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap( (searchText) =>  this.service.getAutocompleteData(searchText) )
    );
  }

  inputFormatBandListValue(value: any)   {
    if(value.name)
      return value.name
    return value;
  }

  selectedItem(media: { item: any; }){

    let mediaId = media.item['id'];
    let mediaType = media.item['media_type'];
    this._router.navigate(['/watch/', mediaType, mediaId]);

  }

  ngOnInit(): void {

  }

}
