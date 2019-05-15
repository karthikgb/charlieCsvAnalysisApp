import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings-data',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  editPopup: boolean = false;
  PopupName: string = '';

  constructor() { }

  dataObject =
    [
      { 'colname': 'Working Directory:', 'colValue': '/home/user_name/cause_results/' },
      { 'colname': 'Cause Factor Threshold:', 'colValue': '80' },
      { 'colname': 'Cause Factor Range:', 'colValue': '30' },
      { 'colname': 'Cause Factor GQ:', 'colValue': '10' },
      { 'colname': 'Cause Factor LT:', 'colValue': '5' },
    ]

  ngOnInit() {
  }

  editData(typeName) {
    this.PopupName  = typeName;
    this.editPopup = !this.editPopup
  }


}


