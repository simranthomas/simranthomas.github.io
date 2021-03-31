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
  isLoading : boolean = true;

  constructor(private service : FetchDataService, private route : ActivatedRoute) { }

  addToLocalStorage(id: any, title: any, posterPath: any, type: any) {

    let mediaObject : any = {'id': id, 'title': title, 'image_path': posterPath, 'media_type': type};
    let continueWatching : any[] = JSON.parse(localStorage.getItem('ContinueWatching')!);

    if(continueWatching == null) {
      let _temp : any[] = [];
      _temp.push(mediaObject);
      localStorage.setItem('ContinueWatching', JSON.stringify(_temp));
    }
    else {
      continueWatching.forEach((item ,index) => {
        if(item.id == id)
          continueWatching.splice(index, 1);
      });
      continueWatching.push(mediaObject);
      localStorage.setItem('ContinueWatching', JSON.stringify(continueWatching));
    }
  }

  ngOnInit(): void {

    this.mediaType = this.route.snapshot.paramMap.get('mediaType');
    this.mediaId = this.route.snapshot.paramMap.get('id');

    this.service.getMediaDetailsData(this.mediaType, this.mediaId)
    .subscribe(
      (data: any) => {
        this.mediaResults = data;

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

        this.addToLocalStorage(this.mediaId, data.media_details.title, data.media_details.poster_path, this.mediaType);

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
