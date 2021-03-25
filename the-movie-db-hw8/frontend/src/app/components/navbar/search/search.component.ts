import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : FetchDataService) { }

  ngOnInit(): void {

    this.service.getAutocompleteData("")
    .subscribe(
      (data: any) => {
        console.log("im hereeeee in autocomplete");
        console.log(data);
      }
    );
  }

}
