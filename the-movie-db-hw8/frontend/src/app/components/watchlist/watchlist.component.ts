import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private breakpoint: BreakpointObserver, private _router : Router) { }

  watchList: any;
  watchlistLRU : any;
  isWatchListEmpty : boolean = true;
  isMobile :boolean = false;

  ngOnInit(): void {

    this.isMobile = this.breakpoint.isMatched('(max-width: 600px');

    this.watchList = JSON.parse(localStorage.getItem("WatchList")!);
    this.watchlistLRU = this.watchList.reverse();

    if(this.watchList.length == 0 || this.watchList == null)
      this.isWatchListEmpty = true;
    else
      this.isWatchListEmpty = false;


  }

  updateWatchList(mediaId: any)
  {
    let watchlist : any[] = JSON.parse(localStorage.getItem('WatchList')!);
    let mediaObject :any;

    watchlist.forEach((item ,index) => {
      if(item.id == mediaId)
      {
        mediaObject = item;
        watchlist.splice(index, 1);
      }
    });
    watchlist.push(mediaObject);
    localStorage.setItem('WatchList', JSON.stringify(watchlist));

  }

  getDetails(mediaType: string, mediaId: number)
  {

    this.updateWatchList(mediaId);

    if (mediaType == "movie") {
      this._router.navigate(['/watch/movie/', mediaId])
    }
    else if(mediaType == "tv") {
      this._router.navigate(['/watch/tv/', mediaId])
    }
  }
}
