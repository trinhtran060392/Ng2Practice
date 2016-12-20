import { Component } from '@angular/core';
import { MdCheckbox, MdDialog, MdDialogRef } from "@angular/material";
import { TemplateService } from './template.service';
import { AuthenticationService } from '../auth/auth.service';
import { CreateTaskDialogComponent } from './create-task-dialog.component';

@Component({
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  providers: [TemplateService, AuthenticationService]
})

export class TemplateComponent {
    
  dialogRef: MdDialogRef<CreateTaskDialogComponent>;

  constructor(private service : TemplateService, private authService : AuthenticationService, public dialog: MdDialog) {

  }
  projects: any[];
  ngOnInit() {
    //this.authService.checkCredentials();
    //this.service.getProjects(localStorage.getItem("user")).subscribe(res => {
      //console.log(res);
    //});
  }
  openDialog() {
    this.dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }
}
