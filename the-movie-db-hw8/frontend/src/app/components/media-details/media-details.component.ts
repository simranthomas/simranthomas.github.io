import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';


@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {

  mediaType : any = "";
  mediaId!: any;
  mediaResults: any;
  releaseAirYear : any;
  duration : any;
  genres : any = "";
  languages : any = "";
  castList : any = [];
  reviewList : any = [];
  numberOfReviews : any;
  typeMedia : any;
  recommendedMedia : any = [];
  similarMedia : any = [];
  twitterURL : string = "";
  facebookURL : string = "";
  posterPath : string = "";
  title : string = "";
  buttonName : string = "Add to Watchlist";
  isLoading : boolean = true;

  constructor(private service : FetchDataService, private route : ActivatedRoute) { }

  addToLocalStorage() {

    let mediaObject : any = {'id': this.mediaId, 'title': this.title, 'image_path': this.posterPath, 'media_type': this.mediaType};
    let continueWatching : any[] = JSON.parse(localStorage.getItem('ContinueWatching')!);

    if(continueWatching == null) {
      let _temp : any[] = [];
      _temp.push(mediaObject);
      localStorage.setItem('ContinueWatching', JSON.stringify(_temp));
    }
    else {
      continueWatching.forEach((item ,index) => {
        if(item.id == this.mediaId)
          continueWatching.splice(index, 1);
      });
      continueWatching.push(mediaObject);
      localStorage.setItem('ContinueWatching', JSON.stringify(continueWatching));
    }
  }

  updateWatchlist() {

    if(this.buttonName == "Add to Watchlist") {
      this.buttonName = "Remove from Watchlist";
      let toAdd : any = {'id': this.mediaId, 'title': this.title, 'image_path': this.posterPath, 'media_type': this.mediaType};
      let watchList: any[] = JSON.parse(localStorage.getItem('WatchList')!);

      if(watchList == null) {
        let _temp : any[] = [];
        _temp.push(toAdd);
        localStorage.setItem('WatchList', JSON.stringify(_temp));
        console.log("in if", JSON.parse(localStorage.getItem('WatchList')!))
      }
      else {
        watchList.push(toAdd);
        localStorage.setItem('WatchList', JSON.stringify(watchList));
        console.log("in else", JSON.parse(localStorage.getItem('WatchList')!))
      }
    } else {
      this.buttonName = "Add to Watchlist";
      let watchList: any[] = JSON.parse(localStorage.getItem('WatchList')!);
      watchList.forEach((item ,index) => {
        if(item.id == this.mediaId && item.media_type == this.mediaType)
          watchList.splice(index, 1);
      });
      localStorage.setItem('WatchList', JSON.stringify(watchList));
    }

  }

  checkInWatchList() {

    let watchList: any[] = JSON.parse(localStorage.getItem('WatchList')!);
    if(watchList != null) {
      watchList.forEach(item => {
        if(item.id == this.mediaId && item.media_type == this.mediaType)
          this.buttonName = "Remove from Watchlist";
      });
    }

  }

  ngOnInit(): void {

    this.mediaType = this.route.snapshot.paramMap.get('mediaType');
    this.mediaId = this.route.snapshot.paramMap.get('id');

    this.checkInWatchList();

    this.service.getMediaDetailsData(this.mediaType, this.mediaId)
    .subscribe(
      (data: any) => {
        this.mediaResults = data;
        this.title = data.media_details.title;
        this.posterPath = data.media_details.poster_path;

        // get the release air date
        this.releaseAirYear = new Date(data.media_details.release_air_date).getFullYear();

        // format the duration
        let minutes : number = data.media_details.runtime;
        let hours = 0;
        console.log(minutes);
        while(minutes/60 > 1) {
          hours++;
          minutes -= 60;
        }
        this.duration = hours + "hrs ";
        if(minutes != 0)
          this.duration += minutes + "mins";

        // create genre list
        let genreList = data.media_details.genres;
        for(var i = 0; i<genreList.length - 1; i++)
          this.genres += genreList[i].name + ',';
        this.genres += genreList[i].name

        // create spoken languages
        let languageList = data.media_details.spoken_languages;
        for(var i = 0; i<languageList.length - 1; i++)
          this.languages += languageList[i].english_name + ',';
        this.languages += languageList[i].english_name;

        // format twitter share message
        let twitterMessageTitle = "Watch " + data.media_details.title;
        let twitterMessageVideo = "https://www.youtube.com/watch?v=" + data.media_video_details.key;
        let twitterMessageHashTag = "#USC #CSCI571 #FightOn";
        this.twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(twitterMessageTitle) + "%0A" + encodeURIComponent(twitterMessageVideo) + "%0A" + encodeURIComponent(twitterMessageHashTag);

        // format facebook vide url
        let facebook = "https://www.youtube.com/watch?v=" + data.media_video_details.key;
        this.facebookURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(facebook);

        // get cast data
        this.castList = data.cast_details;

        // get the number of reviews
        this.numberOfReviews = data.review_details.length;

        // get review data
        this.reviewList = data.review_details;

        this.typeMedia = (this.mediaType == "movie") ? "Movies" : "TV Shows";

        // get the recommended media list
        this.recommendedMedia = data.recommendations;

        // get the similar media list
        this.similarMedia = data.similar;

        this.addToLocalStorage();

        this.isLoading = false;
      }
    );

    this.service.getCastDetailsData(1)
    .subscribe(
      (data: any) => {
        console.log("im hereeeee in cast details");
        console.log(data);
      }
    );
  }

}
