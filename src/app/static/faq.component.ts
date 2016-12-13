import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  templateUrl: './faq.component.html',
  providers: [AuthenticationService]
})

export class FaqComponent {
  constructor(private service : AuthenticationService) {

  }

  ngOnInit() {
  }

}
