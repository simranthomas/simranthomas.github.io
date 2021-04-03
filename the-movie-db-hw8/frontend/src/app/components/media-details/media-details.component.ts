import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FetchDataService } from 'src/app/services/fetch-data.service';


@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {

  @ViewChild('watchlistAlert', {static: false}) watchlistAlert: any;

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
  closeResult: string = '';
  cast_result: any;
  cast_instagram: boolean = false;
  cast_imdb: boolean = false;
  cast_facebook: boolean = false;
  cast_twitter: boolean = false;
  isLoadingModal: boolean = true;
  addedFlag: boolean = false;
  removedFlag: boolean = false;

  constructor(private service : FetchDataService, private route : ActivatedRoute, private _router : Router, private modalService: NgbModal) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

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

    setTimeout(() => this.watchlistAlert.close(), 2000);

    if(this.buttonName == "Add to Watchlist") {

      this.addedFlag = true;
      this.buttonName = "Remove from Watchlist";
      let toAdd : any = {'id': this.mediaId, 'title': this.title, 'image_path': this.posterPath, 'media_type': this.mediaType};
      let watchList: any[] = JSON.parse(localStorage.getItem('WatchList')!);

      if(watchList == null) {
        let _temp : any[] = [];
        _temp.push(toAdd);
        localStorage.setItem('WatchList', JSON.stringify(_temp));
      }
      else {
        watchList.push(toAdd);
        localStorage.setItem('WatchList', JSON.stringify(watchList));
      }
    } else {
      this.buttonName = "Add to Watchlist";
      this.removedFlag = true;
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
          this.genres += genreList[i].name + ', ';
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

        // format created at date and rating
        this.reviewList.forEach((element: any) => {

          let monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

          var createdDate = new Date(element.created_at);
          var month = createdDate.getMonth();
          var _date = createdDate.getDate().toString();
          var year = createdDate.getFullYear();
          var hours = createdDate.getHours();
          var AMPM = hours >= 12 ? 'PM' : 'AM';
          _date = _date.charAt(0) == '0' ? _date.charAt(1) : _date

          var _time = new Date(element.created_at).toString().substring(16,24);
          var text = monthList[month] + ' ' + _date + ', ' + year + ', ' + _time + ' ' + AMPM;

          element.created_at = text;

          if(element.rating == null)
            element.rating = 0;
        });

        this.typeMedia = (this.mediaType == "movie") ? "Movies" : "TV Shows";

        // get the recommended media list
        this.recommendedMedia = data.recommendations;

        // get the similar media list
        this.similarMedia = data.similar;

        this.addToLocalStorage();

        this.isLoading = false;
      }
    );

  }

  open(content : any, id: any) {

    this.cast_instagram = false;
    this.cast_imdb = false;
    this.cast_twitter = false;
    this.cast_facebook = false;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.service.getCastDetailsData(id)
        .subscribe((result : any) => {
        this.cast_result = result;
        if (this.cast_result.gender == "1") {
          this.cast_result.gender = 'Female';
        } else {
          this.cast_result.gender = "Male";
        }
        var aka: string = '';
        console.log(this.cast_result);
        this.cast_result.also_known_as.forEach((element: any) => {
          aka += element+', ';
        });

        this.cast_result.also_known_as = aka.slice(0,aka.length-2);

        if (this.cast_result.instagram_id != "" && this.cast_result.instagram_id != null) {
          this.cast_instagram = true;
        }
        if (this.cast_result.imdb_id != "" && this.cast_result.imdb_id != null) {
          this.cast_imdb = true;
        }
        if (this.cast_result.facebook_id != "" && this.cast_result.facebook_id != null) {
          this.cast_facebook = true;
        }
        console.log(this.cast_result.twitter_id);
        if (this.cast_result.twitter_id != "" && this.cast_result.twitter_id != null) {
          this.cast_twitter = true;
        }

        this.isLoadingModal = false;
        });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
