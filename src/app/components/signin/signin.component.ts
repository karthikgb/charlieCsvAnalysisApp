import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
    formType: string;
  }
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    constructor(public dialog: MatDialog) { }

    ngOnInit() {}

    formtype: string = "";
    data ;

    openDialog(formType:string): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: (formType=="ForgotPwd")?'449':'500',
          data: {formType:formType}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.data = result;
        });
      }
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog-overview-example-dialog.html',
    styleUrls: ['./dialog-overview-example-dialog.scss']

  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
