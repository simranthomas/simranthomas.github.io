import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  apiURLHomepage = "http://localhost:8080/api/homepage";
  apiURLMediaDetails = "http://localhost:8080/api/media_details?mediaType=";
  apiURLCastDetails = "http://localhost:8080/api/cast_details?personId=";
  apiURLAutocomplete = "http://localhost:8080/api/autocomplete";

  constructor( private httpclient : HttpClient ) { }

  getHomepageData() {
    var response = this.httpclient.get(this.apiURLHomepage)
    return response as any;
  }

  getMediaDetailsData(mediaType : string, mediaId : number) {
    var response = this.httpclient.get(this.apiURLMediaDetails + mediaType + '&id=' + mediaId);
    return response as any;
  }

  getCastDetailsData(personId : number) {
    var response = this.httpclient.get(this.apiURLCastDetails + personId);
    return response as any;
  }

  getAutocompleteData(query : string) {
    var response = this.httpclient.get(this.apiURLAutocomplete);
    return response as any;
  }

}
