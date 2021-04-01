import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Media } from './../homepage/homepage.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.css']
})
export class CarouselCardsComponent implements OnInit {

  constructor(private breakpointObserver : BreakpointObserver, private _router : Router) { }

  @Input() mediaList!: any;

  groupMedia : any = [];
  singleGroup : Media[] = [];
  emptyMedia : any = {"id": 0, "title": "" ,"image_path": ""};
  mobile =false;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  ngOnChanges(): void {

    var j = 0;
    for(var i=0 ; i< this.mediaList.length; i++)
    {
      if(i!=0 && j % 6 == 0)
      {
        this.groupMedia.push(this.singleGroup);
        this.singleGroup = [];
        this.singleGroup.push(this.mediaList[i]);
        j = 1;
      }
      else
      {
        this.singleGroup.push(this.mediaList[i]);
        j++;
      }
    }

    if(this.singleGroup.length != 0)
    {
      while(this.singleGroup.length != 6)
      {
        this.singleGroup.push(this.emptyMedia);
      }
      this.groupMedia.push(this.singleGroup);
    }
  }

  ngOnInit(): void {

    this.mobile = this.breakpointObserver.isMatched('(max-width: 599px)');
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

