import { Component } from '@angular/core';
import { MdCheckbox } from "@angular/material";
import { ProjectsService } from '../projects/projects.service';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService, AuthenticationService]
})

export class ProjectsComponent {

  constructor(private service : ProjectsService, private authService : AuthenticationService) {

  }
  projects: any[];
  ngOnInit() {
    //this.authService.checkCredentials();
    //this.service.getProjects(localStorage.getItem("user")).subscribe(res => {
      //console.log(res);
    //});
  }
}
