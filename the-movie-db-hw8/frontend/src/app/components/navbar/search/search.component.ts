import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { FetchDataService } from 'src/app/services/fetch-data.service';

export interface SearchResults {
  id: number,
  title: string,
  backdrop_path: string,
  media_type: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : FetchDataService) { }

  public model: any;

  search: OperatorFunction<string, readonly {SearchResults : any}[]> = (text$: Observable<string>) => {
    // console.log("i got the results");
    // console.log(text$.pipe(
    //   debounceTime(200),
    //   switchMap( (searchText) =>  this.service.getAutocompleteData(searchText) as any[] )));

    return text$.pipe(
      debounceTime(200),
      switchMap( (searchText) =>  this.service.getAutocompleteData(searchText) as any[] ),
    );
  }

  formatter = (x: {title: string}) => x.title;

  ngOnInit(): void {

  //   this.service.getAutocompleteData("game")
  //   .subscribe(
  //     (data: any) => {
  //       console.log("im hereeeee in autocomplete");
  //       console.log(data);
  //     }
  //   );
  }

}
