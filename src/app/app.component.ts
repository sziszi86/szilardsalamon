import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <section class="main-site">
      <app-slide-contact></app-slide-contact>
      <section class="right-main">
        <app-header></app-header>
        <main><router-outlet></router-outlet></main>
        <app-footer></app-footer>
      </section>
    </section>
  `,
})
export class AppComponent {
  title = environment.type;
}
