import {Component, OnInit} from '@angular/core';
// import * as milestonesFrontend from '../../../assets/frontend-roadmap-content.json';
import {FrontendDataService} from '../../frontend-data.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})

export class FrontendComponent implements OnInit {

  milestonesFrontend: any;

  constructor(private frontendDataService: FrontendDataService) {
    // TODO implement usage of external JSON for practicing purposes
    // console.log('Reading local json files');
    // console.log(milestonesFrontend);
  }

  ngOnInit() {

    // Load data from service
    this.frontendDataService.getMilestonesFrontend().subscribe(data => {
      this.milestonesFrontend = data;
    });
  }
}
