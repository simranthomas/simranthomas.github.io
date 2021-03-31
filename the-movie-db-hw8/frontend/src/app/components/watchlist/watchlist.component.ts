import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private _router : Router) { }

  watchList: any;
  watchlistLRU : any;
  isWatchListEmpty : boolean = true;

  ngOnInit(): void {

    this.watchList = JSON.parse(localStorage.getItem("WatchList")!);
    this.watchlistLRU = this.watchList.reverse();

    if(this.watchList == null)
      this.isWatchListEmpty = true;
    else
      this.isWatchListEmpty = false;

  }

  getDetails(mediaType: string, mediaId: number)
  {
    if (mediaType == "movie") {
      this._router.navigate(['/watch/movie/', mediaId])
    }
    else if(mediaType == "tv") {
      this._router.navigate(['/watch/tv/', mediaId])
    }
  }
}
