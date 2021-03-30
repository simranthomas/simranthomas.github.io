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

  constructor(private service : FetchDataService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.mediaType = this.route.snapshot.paramMap.get('mediaType');
    this.mediaId = this.route.snapshot.paramMap.get('id');

    this.service.getMediaDetailsData(this.mediaType, this.mediaId)
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
