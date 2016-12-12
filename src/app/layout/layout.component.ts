import { Component } from '@angular/core';

import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [AuthenticationService]
})
export class LayoutComponent {
  title = 'app works!';

  constructor(private service: AuthenticationService) {
  }
  logout() {
    this.service.logout();
  }
}
