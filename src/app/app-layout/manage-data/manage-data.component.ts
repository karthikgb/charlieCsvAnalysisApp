import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { CommonService, PeriodicElement } from '../common-service';
import { Input } from '@angular/compiler/src/core';




@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {

  displayedColumns: string[] = ['name', 'FileCount', 'MinDataRows', 'MaxDataRows', 'del', 'highlighted', 'failSrc'];
  dataSource = new MatTableDataSource(this.commonService.MANAGE_DATA);
  failSrcArray = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private commonService: CommonService) { }
  addDataPopup: boolean = false;
  setfailSrcPopup: boolean = false;
  fileOption = '';
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  addData() {
    this.addDataPopup = !this.addDataPopup
  }


  importFile(event) {
    if (event.target.files.length == 0) {
      return
    }
    let file: File = event.target.files[0];
    // after here 'file' can be accessed and used for further process
    this.addData()
  }

  upload(files, fileInput) {
    var countfiles = files.length;
    var dirName = files[0].webkitRelativePath.split("/")[0];
    this.commonService.MANAGE_DATA.forEach((d, i) => {
      if (d.name === dirName) {
        this.commonService.MANAGE_DATA.splice(i, 1);
      }
    });

    this.commonService.parseUploadedData(files);
    fileInput.value = '';
    var interval = setInterval(() => {
      var tempArr = this.commonService.MANAGE_DATA.filter(d => d.name === dirName)[0];
      if (tempArr.file.length == countfiles) {
        clearInterval(interval);
        this.dataSource = new MatTableDataSource(this.commonService.MANAGE_DATA);
        this.dataSource.sort = this.sort;
        this.addData();
      }
    }, 400);
  }

  setdefault(rowData) {
    this.commonService.MANAGE_DATA.forEach(d => {
      if (rowData.name === d.name) {
        d.highlighted = true;
        d.failSrc = true;
        this.setfailSrc(false, d)

      } else {
        d.highlighted = false;
        d.failSrc = false;
      }

    })
  }
  setfailSrc(visible, d?) {
    console.log(d)
    if (d) {
      if (d == 'select') {
        this.commonService.defaultFailSrc = this.failSrcArray.filter(d => d.name === this.fileOption)[0]
      }
      else {
        this.fileOption = d.file[0].name;
        this.failSrcArray = d.file;
        this.commonService.defaultFailSrc = d.file[0];
      }
    }

    if (visible) {
      if (!this.commonService.defaultFailSrc) {
        var tempDta = this.commonService.MANAGE_DATA.filter(d => d.highlighted == true)[0]
        this.fileOption = tempDta.file[0].name;
        this.failSrcArray = tempDta.file;
        this.commonService.defaultFailSrc = tempDta[0];

      }
      this.setfailSrcPopup = !this.setfailSrcPopup;
    }
  }
}
