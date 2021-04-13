import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  apiURLHomepage = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/homepage";
  apiURLMediaDetails = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/media_details?mediaType=";
  apiURLCastDetails = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/cast_details?personId=";
  apiURLAutocomplete = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/autocomplete?searchQuery=";

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

  getAutocompleteData(query : string): Observable<string[]> {
    var response = this.httpclient.get<any[]>(this.apiURLAutocomplete + query);
    return response;
  }

}
