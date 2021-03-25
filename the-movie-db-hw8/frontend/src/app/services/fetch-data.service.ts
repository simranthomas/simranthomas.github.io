import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  apiURLHomepage = "http://localhost:8080/api/homepage"
  apiURLMediaDetails = "http://localhost:8080/api/media_details"
  apiURLCastDetails = "http://localhost:8080/api/cast_details"
  apiURLAutocomplete = "http://localhost:8080/api/autocomplete"

  constructor( private httpclient : HttpClient ) { }

  getHomepageData() {
    var response = this.httpclient.get(this.apiURLHomepage)
    return response as any;
  }

  getMediaDetailsData(mediaID : number) {
    var response = this.httpclient.get(this.apiURLMediaDetails);
    return response as any;
  }

  getCastDetailsData(personID : number) {
    var response = this.httpclient.get(this.apiURLCastDetails);
    return response as any;
  }

  getAutocompleteData(query : string) {
    var response = this.httpclient.get(this.apiURLAutocomplete);
    return response as any;
  }

}
