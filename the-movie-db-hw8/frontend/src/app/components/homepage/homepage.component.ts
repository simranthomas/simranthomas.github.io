import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service : FetchDataService) { }

  ngOnInit(): void {

    this.service.getHomepageData()
    .subscribe(
      (data: any) => {
        console.log("im hereeeee in homepage");
        console.log(data);
        console.log(data['top_rated_tv'])
      }
    );
  }

}
