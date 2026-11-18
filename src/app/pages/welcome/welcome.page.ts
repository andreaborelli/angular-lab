import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-welcome',
  styles: `
    main {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    h1 {
      color: #1976d2;
    }
  `,
  template: `
  <main>
    <h1>Welcome to the Angular {{ title() }}</h1>
  </main>
  `,
})
export class WelcomePage {

    title = signal('Lab Guide');

}
