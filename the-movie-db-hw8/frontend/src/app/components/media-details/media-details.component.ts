import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {

  constructor(private service : FetchDataService) { }

  ngOnInit(): void {

    this.service.getMediaDetailsData(1)
    .subscribe(
      (data: any) => {
        console.log("im hereeeee in media details");
        console.log(data);
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
