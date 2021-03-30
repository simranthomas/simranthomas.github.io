import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Component, OnInit } from '@angular/core';

export interface Media {
  id: number,
  title: string,
  imagePath: string
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  carouselMovies: Media[] =[];
  popularTv: Media[] =[];
  popularMovies: Media[] =[];
  topRatedTv: Media[] =[];
  topRatedMovies: Media[] =[];
  trendingTv: Media[] =[];
  trendingMovies: Media[] =[];

  constructor(private service : FetchDataService) { }

  ngOnInit(): void {
    this.service.getHomepageData()
    .subscribe(
      (data: any) => {
        this.carouselMovies = data['carousel_movies'].slice(0,5);
        this.popularTv = data['popular_tv'];
        this.popularMovies = data['popular_movies'];
        this.topRatedTv = data['top_rated_tv'];
        this.topRatedMovies = data['top_rated_movies'];
        this.trendingTv = data['trending_tv'];
        this.trendingMovies = data['trending_movies'];
      }
    );
  }

}
