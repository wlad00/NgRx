import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <div class="container">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>

    <style>
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 100%;
        /*height: 50%;*/
        /*background: darkgrey;*/
      }

      .container {
        padding: 30px;
        flex: 1;
      }

    </style>

  `
})
export class AppComponent {
}
