import { Component } from '@angular/core';
import { UserProfile } from '../user-profile/user-profile';
import { WelcomePage } from '../pages/welcome/welcome.page';

@Component({
  imports: [UserProfile, WelcomePage],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
  
})
export class Dashboard {}
