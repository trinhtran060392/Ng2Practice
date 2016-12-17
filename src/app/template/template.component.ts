import { Component } from '@angular/core';
import { MdCheckbox } from "@angular/material";
import { TemplateService } from './template.service';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  providers: [TemplateService, AuthenticationService]
})

export class TemplateComponent {

  constructor(private service : TemplateService, private authService : AuthenticationService) {

  }
  projects: any[];
  ngOnInit() {
    //this.authService.checkCredentials();
    //this.service.getProjects(localStorage.getItem("user")).subscribe(res => {
      //console.log(res);
    //});
  }
}
