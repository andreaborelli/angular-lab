import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-profile',
  styleUrl: './user-profile.scss',
  templateUrl: './user-profile.html',
  host: {
    'role': 'button',
    '(click)': 'onClick()'
  }
})
export class UserProfile {
  protected onClick() {
    console.log('Button clicked!');
  }
  // esempio di proprietà reattive (signal)
  userName = signal('Andrea Borelli');
  userRole = signal('Sviluppatore Junior');

}
