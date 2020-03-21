// TODO try later with external JSON -> import * as milestonesFrontend from '../../../assets/frontend-roadmap-content.json';
import {Component, OnInit, ViewChildren} from '@angular/core';
import {FrontendDataService} from '../../../services/frontend-data.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})

export class FrontendComponent implements OnInit {

  @ViewChildren('thisStep') step;

  milestonesFrontend: any;
  selectedIds: any;

  constructor(
    private frontendDataService: FrontendDataService,
  ) {
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
