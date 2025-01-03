import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required

  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  //-------------------------------------------------------------------------------------------
  //************************************Get correct Date and Time******************************
  //  -----------------------------------------------------------------------------------------
  getCorrectDate(date: string): string {
    return date.substring(0,10);
  }
  getCorrectTime(date: string): string {
    return date.substring(11,16);
  }
  getCorrectDateTime(date: string): string {
    return this.getCorrectDate(date) + 'T' + this.getCorrectTime(date);
  }
  //--------------------------------------------------------------------------------------------
  //********************************Store Date and Time****************************************
  // -------------------------------------------------------------------------------------------
  storeDate(date: string, time: string): string {
    return date + 'T'+ time;
  }
  storeTime(date: string, time: string): string {
    return date.substring(0,10) + 'T' + time;
  }
  storeDateTime(date: string, time: string): string {
    return date + 'T' + time;
  }
  //-------------------------------------------------------------------------------------------
  // **************************Post Date and Time*********************************************
  // ------------------------------------------------------------------------------------------
  postDate(date: string): string {
    return date.substring(0,10);
  }
  postTime(date: string): string {
    return date.substring(11,16);
  }
  postDateTime(date: string): string {
    return date.substring(0,10) + 'T' + date.substring(11,16);
  }
  //-------------------------------------------------------------------------------------------
 // *******************************Bind Date and Time*****************************************
  //------------------------------------------------------------------------------------------
  bindDate(date: string): string {
    return date.substring(0,10);
  }
  bindTimw(date: string): string {
    return date.substring(11,16);
  }
  bindDateTime(date: string): string {
    return date.substring(0,10) + 'T' + date.substring(11,16);
  }

  submit() {
  
  }
//-------------------------------------------------------------------------------------------//*
  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService.updateIssue(this.data);
  }
}
