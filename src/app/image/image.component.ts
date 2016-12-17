import { Router } from '@angular/router';
import { MdCheckbox } from "@angular/material";

import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  providers: [AuthenticationService]
})

export class ImageComponent {

}
