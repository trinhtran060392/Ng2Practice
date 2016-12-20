import { Component } from '@angular/core';
import { MdCheckbox, MdDialog, MdDialogRef } from "@angular/material";

@Component({
  selector: 'create-task-dialog',
  templateUrl: './create-task-dialog.component.html'
})
export class CreateTaskDialogComponent {
  constructor(public dialogRef: MdDialogRef<CreateTaskDialogComponent>) { }
}