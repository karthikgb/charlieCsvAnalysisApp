import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common-service';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css']
})
export class CauseComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  fileOption = 'option1';
  failSrcFile = 'No Data Found';
  toggleSummary: boolean = false;
  causeAnalysisData;
  objectKeys = Object.keys
  ngOnInit() {
    if (this.commonService.defaultFailSrc) {
      this.failSrcFile = this.commonService.defaultFailSrc.name;

    }
  }

  callRun() {
    this.commonService.getDataForTheCause().subscribe((res: Response) => {
      this.causeAnalysisData = res;
      this.toggleSummary = !this.toggleSummary;
    }, error => {
      console.log(error);
      var errorFromSubscribe = error;
    });
  }

}