import {Component, OnInit} from '@angular/core';
// import * as milestonesFrontend from '../../../assets/frontend-roadmap-content.json';
import {FrontendDataService} from '../../frontend-data.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})

export class FrontendComponent implements OnInit {

  milestonesFrontendContent: any;
  milestonesFrontendHeadlines: string[];

  constructor(private frontendDataService: FrontendDataService) {
    // console.log('Reading local json files');
    // console.log(milestonesFrontend);
  }

  ngOnInit() {
    this.frontendDataService.getMilestonesFrontendContent().subscribe(data => {
      this.milestonesFrontendContent = data;
    });
    this.frontendDataService.getMilestonesFrontendHeadlines().subscribe(data => {
      this.milestonesFrontendHeadlines = data;
    });
  }
}
