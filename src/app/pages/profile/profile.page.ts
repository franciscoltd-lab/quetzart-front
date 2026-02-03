
import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [IonicModule, CommonModule],
  templateUrl: './profile.page.html'
})
export class ProfilePage {

  auth = inject(AuthService);

  logout() {
    this.auth.logout();
  }
}
