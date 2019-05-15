import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../common-service';

@Component({
  selector: 'app-analyze-data',
  templateUrl: './analyze-data.component.html',
  styleUrls: ['./analyze-data.component.css']
})
export class AnalyzeDataComponent implements OnInit {
  constructor(  public router: Router,private commonService: CommonService) { }


  fileOption = '';
  AnalyisisOption = 'chart'
  datasetArray = [];
 
  ngOnInit() {
    this.datasetArray = this.commonService.MANAGE_DATA;
    if(this.datasetArray.length > 0){
      this.fileOption = this.datasetArray[0].name
    }
  }

  changeSelectAnalysis(evendata) {
    this.router.navigate(['analysis', 'analyze-data', evendata.value]);
  }


  ngOnDestroy() {
  }



}
